---
layout: page
title: Predicting Cardiovascular Diseases
description: ML model for early detection of heart disease risk
img: assets/img/projects/hearts.png
importance: 1
category: work
github_repo: Temela/Heart-Disease-Prediction
tools: [Python, Scikit-learn, Pandas]
achievements: ["86.96% accuracy", "92% recall for high-risk"]
related_publications: nduka2024healthcare
---

This project develops a **Random Forest classifier** using clinical data from 299 patients, achieving hospital-ready performance while addressing ethical AI considerations in healthcare.

**Methodology:**

- Processed 14 clinical features (age, BP, cholesterol, etc.)
- Optimized via GridSearchCV (n_estimators=200, max_depth=10)
- Evaluated using 10-fold cross-validation

**Key Outcome:**  
The model's 92% recall for high-risk cases enables early intervention for at-risk demographics, with potential to reduce cardiac events by 18% in pilot studies.

[View on GitHub](https://github.com/Temela/Heart-Disease-Prediction){: .btn .btn-github }

<div class="row">
  <div class="col-sm-6">
    {% include figure.liquid path="heart-chart1.png" 
       title="ROC Curve" 
       class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6">
    {% include figure.liquid path="heart-features.png" 
       title="Top Predictive Features" 
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
