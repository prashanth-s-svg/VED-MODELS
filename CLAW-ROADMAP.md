# BharatClaw — Robotic Gripper Roadmap 🦾

> **Goal:** Design and build a robotic claw that outperforms
> [NemoClaw](https://github.com/nmsl-lab/nemoclaw) and
> [OpenClaw](https://github.com/pinchasaurus/openclaw) in gripping force,
> payload range, sensing accuracy, and open-source accessibility.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Competitive Analysis](#2-competitive-analysis)
3. [Learning Roadmap (Course Syllabus)](#3-learning-roadmap-course-syllabus)
4. [Build Plan (Phases)](#4-build-plan-phases)
5. [Hardware Bill of Materials](#5-hardware-bill-of-materials)
6. [Software Stack](#6-software-stack)
7. [Milestones & Timeline](#7-milestones--timeline)
8. [Contributing](#8-contributing)

---

## 1. Project Overview

**BharatClaw** is a fully open-source, 3-finger adaptive robotic gripper
built in India. Key design targets:

| Metric               | NemoClaw  | OpenClaw  | **BharatClaw target** |
|----------------------|-----------|-----------|-----------------------|
| Max gripping force   | ~30 N     | ~25 N     | **≥ 60 N**            |
| Payload (kg)         | 1.5       | 1.2       | **≥ 3.0**             |
| Finger DOF           | 1         | 2         | **3 (fully adaptive)**|
| Force sensing        | None      | Basic FSR | **6-axis F/T sensor** |
| ROS 2 support        | Partial   | No        | **Full**              |
| Cost (USD, BOM)      | ~$180     | ~$120     | **≤ $150**            |
| License              | CC BY-SA  | MIT       | **Apache 2.0**        |

---

## 2. Competitive Analysis

### NemoClaw
- **Strengths:** Good mechanical design, decent community, CAD files available.
- **Weaknesses:** Single DOF per finger, no tactile sensing, limited ROS 2 integration,
  closed firmware, higher BOM cost.

### OpenClaw
- **Strengths:** Lightweight, low cost, simple to assemble.
- **Weaknesses:** Very low payload, no sensing, no ROS support, no active development.

### BharatClaw Advantages
1. **Adaptive 3-DOF fingers** — underactuated linkage allows grasping irregular objects.
2. **Integrated 6-axis F/T sensing** — real-time force feedback per finger.
3. **ROS 2 (Humble/Iron) first-class support** — MoveIt 2 plugin included.
4. **Fully parametric OpenSCAD / FreeCAD model** — scale to any robot arm.
5. **Made-in-India BOM** — components sourced from Indian distributors to keep costs low.
6. **Comprehensive documentation** — step-by-step assembly, calibration, and control guides.

---

## 3. Learning Roadmap (Course Syllabus)

Work through the modules below in order. Each module lists free/low-cost resources.

### Module 0 — Foundations (2–3 weeks)
| Topic | Resource |
|-------|----------|
| Python basics | [Python.org tutorial](https://docs.python.org/3/tutorial/) |
| Linear algebra essentials | 3Blue1Brown "Essence of Linear Algebra" (YouTube) |
| Basic electronics (Ohm's law, PWM, I²C, SPI) | SparkFun Learn Electronics |
| 3-D printing workflow | Prusa Knowledge Base |

### Module 1 — Mechanical Design (3–4 weeks)
| Topic | Resource |
|-------|----------|
| Mechanism theory (linkages, cams, gears) | Norton "Design of Machinery" Ch. 1–4 |
| CAD with FreeCAD | FreeCAD 0.21 official docs |
| Underactuated gripper principles | MIT OpenCourseWare 6.832 |
| Finite-element analysis (FreeCAD FEM) | FreeCAD FEM workbench tutorial |
| Tolerance & fit for 3-D printed parts | Maker's Muse YouTube series |

**Hands-on:** Sketch three finger-linkage concepts, simulate in FreeCAD,
select the best and print a 1-finger prototype.

### Module 2 — Actuators & Electronics (2–3 weeks)
| Topic | Resource |
|-------|----------|
| Servo motor selection (torque, speed, feedback) | ServoCity sizing guide |
| Brushless DC + encoder basics | GreatScott! BLDC videos |
| Strain-gauge / FSR force sensing | Honeywell application note AN001 |
| Arduino / Raspberry Pi GPIO | Official Arduino reference |
| PCB design with KiCad | KiCad official tutorials |

**Hands-on:** Wire a single servo + FSR to an Arduino, read force and position
in real time, log to CSV.

### Module 3 — Firmware & Low-level Control (3–4 weeks)
| Topic | Resource |
|-------|----------|
| PID control theory | Brian Douglas "Control Systems" (YouTube) |
| Embedded C++ (Arduino/STM32) | STM32 HAL library examples |
| CAN bus for multi-actuator comms | CSS Electronics CAN bus guide |
| Safety: current limiting, watchdog timers | Texas Instruments app note SLAA315 |

**Hands-on:** Implement a PID position controller for one finger;
add torque/current limiting.

### Module 4 — ROS 2 Integration (3–4 weeks)
| Topic | Resource |
|-------|----------|
| ROS 2 concepts (nodes, topics, services, actions) | ROS 2 official tutorials |
| URDF / xacro gripper description | MoveIt 2 gripper tutorial |
| ros2_control hardware interface | ros2_control docs |
| MoveIt 2 grasp pipeline | PickNik MoveIt 2 tutorials |
| Gazebo Harmonic simulation | Gazebo docs |

**Hands-on:** Write a `GripperHardwareInterface`, spawn the gripper in Gazebo,
execute open/close actions via MoveIt 2.

### Module 5 — Perception & Intelligence (4–5 weeks)
| Topic | Resource |
|-------|----------|
| Computer vision basics | OpenCV Python tutorial |
| Object detection with YOLO v8 | Ultralytics docs |
| Point-cloud processing | Open3D tutorials |
| Grasp pose estimation (GraspNet / AnyGrasp) | GraspNet-1Billion paper |
| PyTorch model deployment on Raspberry Pi | NCNN / TFLite guides |

**Hands-on:** Detect household objects with a depth camera; compute and
execute grasp poses autonomously.

### Module 6 — Testing, Documentation & Release (2 weeks)
| Topic | Resource |
|-------|----------|
| Unit & integration testing (pytest, gtest) | pytest docs |
| CI/CD with GitHub Actions | GitHub Actions docs |
| Technical writing (README, CONTRIBUTING) | Write the Docs guide |
| Open-source licensing | choosealicense.com |

---

## 4. Build Plan (Phases)

### Phase 1 — Research & Design (Weeks 1–6)
- [ ] Complete Modules 0–1
- [ ] Benchmark NemoClaw and OpenClaw (print, assemble, measure)
- [ ] Define BharatClaw requirements document (`docs/requirements.md`)
- [ ] Produce 3 CAD concepts; peer-review with community; choose winner
- [ ] Validate chosen design with FEM stress analysis (target FOS ≥ 2.5)

### Phase 2 — Prototype v0.1 (Weeks 7–12)
- [ ] Complete Modules 2–3
- [ ] 3-D print finger assembly + palm; assemble full gripper
- [ ] Wire servo drivers + FSR array; flash PID firmware
- [ ] Manual open/close tests; record gripping-force curves
- [ ] Iterate CAD based on failure modes; produce v0.2 print

### Phase 3 — ROS 2 Integration (Weeks 13–18)
- [ ] Complete Module 4
- [ ] Implement `bharatclaw_description` (URDF/xacro)
- [ ] Implement `bharatclaw_hardware` (ros2_control interface)
- [ ] Simulate in Gazebo Harmonic; validate kinematics
- [ ] MoveIt 2 grasp demo with a predefined set of objects

### Phase 4 — Perception & AI (Weeks 19–26)
- [ ] Complete Module 5
- [ ] Integrate depth camera (Intel RealSense D435i or OAK-D)
- [ ] Train custom grasp-pose model on household-object dataset
- [ ] End-to-end pick-and-place demo (detect → plan → grasp → release)
- [ ] Benchmark success rate vs. NemoClaw/OpenClaw baselines

### Phase 5 — Polish & Open-Source Release (Weeks 27–30)
- [ ] Complete Module 6
- [ ] Full assembly manual with photos/videos
- [ ] API reference docs (auto-generated via rosdoc2)
- [ ] CI pipeline: build, test, lint on every PR
- [ ] Tag v1.0.0 release; publish to BharatHub & ROS Index

---

## 5. Hardware Bill of Materials

| # | Component | Qty | Est. Cost (₹) | Source |
|---|-----------|-----|--------------|--------|
| 1 | Dynamixel XL430-W250-T servo | 3 | ₹ 8,400 | RoboSmart India |
| 2 | Raspberry Pi 4 (4 GB) | 1 | ₹ 5,500 | RS Components India |
| 3 | Arduino Nano (firmware MCU) | 1 | ₹ 350 | Robu.in |
| 4 | U2D2 USB-to-Dynamixel converter | 1 | ₹ 3,200 | RoboSmart India |
| 5 | FSR 402 force sensor | 3 | ₹ 450 | Electron Components |
| 6 | MCP3208 12-bit ADC | 1 | ₹ 120 | Robu.in |
| 7 | Intel RealSense D435i | 1 | ₹ 22,000 | Intel ARK / Amazon India |
| 8 | PLA+ filament (1 kg) | 1 | ₹ 900 | eSUN India |
| 9 | M3 hardware kit (bolts, nuts, inserts) | 1 | ₹ 250 | Local hardware store |
| 10 | 12 V / 5 A power supply | 1 | ₹ 600 | Robu.in |
| **Total** | | | **≈ ₹ 41,770 (~$500)** | |

> **Note:** Dynamixel servos dominate the cost. A lower-cost variant using
> MG996R servos + custom encoder boards can bring the total under ₹ 8,000
> (~$100) with reduced performance.

---

## 6. Software Stack

```
bharatclaw/
├── hardware/           # FreeCAD + STL files
├── firmware/           # Arduino C++ PID controller
├── bharatclaw_description/   # ROS 2 URDF/xacro
├── bharatclaw_hardware/      # ros2_control HW interface (C++)
├── bharatclaw_moveit/        # MoveIt 2 config + grasp pipeline
├── bharatclaw_perception/    # Python: YOLO + GraspNet inference
├── bharatclaw_bringup/       # Launch files, config YAML
└── docs/               # Assembly guide, API reference
```

| Layer | Technology |
|-------|-----------|
| Mechanical CAD | FreeCAD 0.21 (parametric, open source) |
| Slicer | PrusaSlicer / Cura |
| Firmware | Arduino C++ (PID + CAN) |
| Middleware | ROS 2 Humble / Iron |
| Simulation | Gazebo Harmonic |
| Motion planning | MoveIt 2 |
| Perception | Python 3.11, OpenCV, PyTorch, Open3D |
| CI/CD | GitHub Actions |
| Docs | Sphinx + rosdoc2 |

---

## 7. Milestones & Timeline

```
Week  1-6  : Phase 1 — Research & Design
Week  7-12 : Phase 2 — Prototype v0.1
Week 13-18 : Phase 3 — ROS 2 Integration
Week 19-26 : Phase 4 — Perception & AI
Week 27-30 : Phase 5 — Polish & Release v1.0.0
```

### Key Review Gates
| Gate | Criteria |
|------|----------|
| G1 (end Phase 1) | CAD approved, FEM FOS ≥ 2.5, requirements frozen |
| G2 (end Phase 2) | Gripping force ≥ 60 N, no mechanical failure in 500-cycle test |
| G3 (end Phase 3) | Open/close via MoveIt 2 in Gazebo, zero ROS errors |
| G4 (end Phase 4) | ≥ 85 % grasp success on 20-object test set |
| G5 (end Phase 5) | All CI checks pass, docs complete, v1.0.0 tagged |

---

## 8. Contributing

1. **Fork** this repository on BharatHub.
2. Create a feature branch: `git checkout -b feat/your-feature`.
3. Follow the coding style in `CONTRIBUTING.md`.
4. Open a Pull Request — all PRs require 1 reviewer approval.
5. Ensure all CI checks pass before requesting a merge.

Community discussions happen in the **Issues** tab. Tag your issue with one of:
`design`, `firmware`, `ros2`, `perception`, `docs`, or `question`.

---

> Built with ❤️ in India 🇮🇳 — *Jai Hind · जय हिन्द*
