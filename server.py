from __future__ import annotations

import os
import random
import threading
import time
from collections import deque
from datetime import datetime, timezone

from flask import Flask, Response, jsonify, send_from_directory

app = Flask(__name__, static_folder=".")
app.static_folder = app.static_folder or "."
_boot_ts = time.time()
_state_lock = threading.Lock()


# Simple in-memory base metrics to simulate "live" movement
_base_metrics = {
    "active_users": 1845,
    "new_signups": 76,
    "revenue_today": 128_450,  # in INR
    "conversion_rate": 4.3,
}

_state = dict(_base_metrics)

_history = {
    "active_users": deque([_state["active_users"]] * 14, maxlen=14),
    "revenue_today": deque([_state["revenue_today"]] * 14, maxlen=14),
    "conversion_rate": deque([_state["conversion_rate"]] * 14, maxlen=14),
}

_products = [
    {"name": "VED Studio", "active": 640, "conversion": 5.8, "mrr": 48600},
    {"name": "Sangam AI Assist", "active": 470, "conversion": 4.9, "mrr": 39200},
    {"name": "Repo Insights Pro", "active": 328, "conversion": 4.1, "mrr": 28450},
    {"name": "Cloud Build Minutes", "active": 275, "conversion": 3.7, "mrr": 22100},
]


def _jitter(rng: random.Random, value: float, pct: float = 0.03) -> float:
    """Apply a small +/- percentage jitter to make numbers feel live."""
    delta = value * pct
    return value + rng.uniform(-delta, delta)


def _pct_change(current: float, prev: float) -> float:
    if not prev:
        return 0.0
    return ((current - prev) / prev) * 100


def _tick_live_state(rng: random.Random) -> None:
    """Move state forward by one simulated live tick (caller must hold _state_lock)."""
    _state["active_users"] = int(max(300, _jitter(rng, _state["active_users"], 0.03)))
    _state["new_signups"] = int(max(0, _jitter(rng, _state["new_signups"], 0.14)))
    _state["revenue_today"] = int(max(10000, _jitter(rng, _state["revenue_today"], 0.05)))
    _state["conversion_rate"] = round(max(1.0, _jitter(rng, _state["conversion_rate"], 0.04)), 2)

    _history["active_users"].append(_state["active_users"])
    _history["revenue_today"].append(_state["revenue_today"])
    _history["conversion_rate"].append(_state["conversion_rate"])

    for product in _products:
        product["active"] = int(max(40, _jitter(rng, product["active"], 0.05)))
        product["conversion"] = round(max(1.0, _jitter(rng, product["conversion"], 0.05)), 2)
        product["mrr"] = int(max(2500, _jitter(rng, product["mrr"], 0.06)))


@app.route("/")
def index() -> Response:
    return send_from_directory(app.static_folder, "index.html")


@app.route("/<path:filename>")
def static_files(filename: str) -> Response:
    """Serve any project file (CSS, JS, etc.) from the workspace folder."""
    return send_from_directory(app.static_folder, filename)


@app.route("/api/hero-metrics")
def hero_metrics():
    """Stats for the hero counters at the top of the page."""
    base = {
        "repos": 124_856,
        "developers": 482_193,
        "contributions": 3_209_441,
    }
    # Use a local RNG seeded on time so numbers shift every ~5 s without
    # touching the global random state.
    ts = int(time.time())
    rng = random.Random(ts // 5)

    data = {
        "repos": int(_jitter(rng, base["repos"], 0.005)),
        "developers": int(_jitter(rng, base["developers"], 0.005)),
        "contributions": int(_jitter(rng, base["contributions"], 0.005)),
    }
    return jsonify(data)


@app.route("/api/product-dashboard")
def product_dashboard():
    """Advanced product dashboard payload with KPIs, trend, and product mix."""
    rng = random.Random(int(time.time() * 10))

    with _state_lock:
        _tick_live_state(rng)

        hist_active = list(_history["active_users"])
        hist_revenue = list(_history["revenue_today"])
        hist_conversion = list(_history["conversion_rate"])

        prev_active = hist_active[-2] if len(hist_active) > 1 else hist_active[-1]
        prev_revenue = hist_revenue[-2] if len(hist_revenue) > 1 else hist_revenue[-1]
        prev_conversion = hist_conversion[-2] if len(hist_conversion) > 1 else hist_conversion[-1]

        alerts = []
        if _state["conversion_rate"] < 3.5:
            alerts.append("Conversion dipped below 3.5%")
        if _state["new_signups"] < 30:
            alerts.append("Signup velocity is low this cycle")
        if _state["active_users"] > 2300:
            alerts.append("High load expected: consider scaling worker pods")

        payload = {
            "timestamp": datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"),
            "kpis": {
                "active_users": _state["active_users"],
                "new_signups": _state["new_signups"],
                "revenue_today": _state["revenue_today"],
                "conversion_rate": _state["conversion_rate"],
                "currency": "INR",
                "delta": {
                    "active_users": round(_pct_change(_state["active_users"], prev_active), 2),
                    "revenue_today": round(_pct_change(_state["revenue_today"], prev_revenue), 2),
                    "conversion_rate": round(_pct_change(_state["conversion_rate"], prev_conversion), 2),
                },
            },
            "trend": {
                "active_users": hist_active,
                "revenue_today": hist_revenue,
                "conversion_rate": hist_conversion,
            },
            "products": sorted(_products, key=lambda x: x["mrr"], reverse=True),
            "alerts": alerts,
        }
    return jsonify(payload)


@app.route("/api/health")
def health():
    """Simple server health endpoint for dashboard connectivity indicator."""
    uptime_seconds = int(time.time() - _boot_ts)
    status = "ok" if uptime_seconds > 5 else "warming"
    return jsonify(
        {
            "status": status,
            "uptime_seconds": uptime_seconds,
            "server_time": datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"),
        }
    )


if __name__ == "__main__":
    debug = os.environ.get("FLASK_DEBUG", "0") == "1"
    port = int(os.environ.get("PORT", "5000"))
    app.run(host="127.0.0.1", port=port, debug=debug)
