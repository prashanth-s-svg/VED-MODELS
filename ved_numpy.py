import torch
import torch.nn as nn
import numpy as np

# Same data as before
X = torch.tensor([[0.5],[1],[1.5],[2],[2.5],[3],[4],
                  [5],[6],[7],[8],[9],[10]], dtype=torch.float32)

y = torch.tensor([[0],[0],[0],[0],[0],[0],[0],[1],[1],[1],[1],[1],[1]], dtype=torch.float32)

# Build the model — 1 line in PyTorch
model = nn.Sequential(
    nn.Linear(1, 1),
    nn.Sigmoid()
)

# Loss function and optimizer
loss_fn = nn.BCELoss()
optimizer = torch.optim.SGD(model.parameters(), lr=0.1)

print("Training VED with PyTorch...\n")

# Train
for epoch in range(1000):
    prediction = model(X)
    loss = loss_fn(prediction, y)
    
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()
    
    if epoch % 200 == 0:
        print(f"Epoch {epoch}: Loss = {loss.item():.4f}")

# Test
print("\nVED's predictions:")
test_hours = [1, 3, 5, 7, 9]
for hours in test_hours:
    x_test = torch.tensor([[float(hours)]])
    prob = model(x_test).item()
    result = "PASS" if prob > 0.5 else "FAIL"
    print(f" {hours} hours studied -> {result} ({prob*100:.1f}% confidence)")