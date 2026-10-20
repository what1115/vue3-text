
---
title: :机器学习
date: 2026-10-20
updated: 2026-10-20
categories:
  - 学习
tags:
  - python
---


# 方慧 - 作业

## 环境依赖
python pip 安装
```
pip install numpy pandas matplotlib seaborn scikit-learn
```

### 任务一  监督学习分类实验
- 使用 K-近邻 (KNN)实现

```python
# -*- coding: utf-8 -*-
import numpy as np
import pandas as pd
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import confusion_matrix, accuracy_score, classification_report


def run_task1():
    print("=" * 40)
    print("开始执行任务一：监督学习分类实验 (KNN)")
    print("=" * 40)

    # 0. 加载数据集
    iris = load_iris()
    X = iris.data
    y = iris.target

    # 1. 数据划分与标准化
    # 划分训练集(80%)和测试集(20%)
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )

    # 对特征进行标准化处理 (KNN对距离敏感，必须标准化)
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)

    # 2. 模型训练与预测
    # 初始化 KNN 模型 (k=3)
    knn_model = KNeighborsClassifier(n_neighbors=3)
    # 训练模型
    knn_model.fit(X_train_scaled, y_train)
    # 预测测试集结果
    y_pred = knn_model.predict(X_test_scaled)

    # 3. 模型评估
    # 输出混淆矩阵
    cm = confusion_matrix(y_test, y_pred)
    print("\n[模型评估] 混淆矩阵:")
    print(cm)

    # 输出准确率
    acc = accuracy_score(y_test, y_pred)
    print(f"\n[模型评估] 准确率 (Accuracy): {acc:.4f}")


if __name__ == "__main__":
    run_task1()
```

> 预计结果

```
========================================
开始执行任务一：监督学习分类实验 (KNN)
========================================

[模型评估] 混淆矩阵:
[[10  0  0]
 [ 0  9  0]
 [ 0  0 11]]

[模型评估] 准确率 (Accuracy): 1.0000


```


### 任务二 监督学习实验

- 选择使用 K-Means 聚类 实现

```python
# -*- coding: utf-8 -*-
import numpy as np
import pandas as pd
from sklearn.datasets import load_iris
from sklearn.cluster import KMeans
from sklearn.metrics import confusion_matrix


def run_task2_kmeans():
    print("=" * 40)
    print("开始执行任务二：无监督学习实验 (K-Means)")
    print("=" * 40)

    # 0. 加载数据集
    iris = load_iris()
    X = iris.data
    y_true = iris.target  # 真实标签，仅用于最后评估，不参与训练

    # 1. 去掉标签，仅使用特征进行聚类
    # 设定簇的数量为 3 (对应鸢尾花的3个品种)
    kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
    y_pred = kmeans.fit_predict(X)  # 注意这里只传入了 X

    # 2. 模型评估：对比聚类结果与真实标签
    print("\n[模型评估] 聚类结果与真实标签对比 (交叉表):")
    # 由于K-Means的标签0,1,2是随机分配的，使用交叉表能更直观地观察对应关系
    df_crosstab = pd.crosstab(y_true, y_pred, rownames=['真实标签'], colnames=['K-Means簇标签'])
    print(df_crosstab)

    # 按照幻灯片要求打印混淆矩阵
    cm = confusion_matrix(y_true, y_pred)
    print("\n[模型评估] 原始混淆矩阵:")
    print(cm)

    print("\n[分析结论]:")
    print("观察交叉表/混淆矩阵，每一行代表一个真实的品种。")
    print("如果每一行的最大值都落在不同的列（例如第一行最大值在第1列，第二行最大值在第2列...），")
    print("则说明 K-Means 成功将数据分为了三个清晰的组。")


if __name__ == "__main__":
    run_task2_kmeans()

```


> 预计结果

```
========================================
开始执行任务二：无监督学习实验 (K-Means)
========================================

[模型评估] 聚类结果与真实标签对比 (交叉表):
K-Means簇标签   0   1   2
真实标签
0            0  50   0
1           48   0   2
2           14   0  36

[模型评估] 原始混淆矩阵:
[[ 0 50  0]
 [48  0  2]
 [14  0 36]]

[分析结论]:
观察交叉表/混淆矩阵，每一行代表一个真实的品种。
如果每一行的最大值都落在不同的列（例如第一行最大值在第1列，第二行最大值在第2列...），
则说明 K-Means 成功将数据分为了三个清晰的组。

```
