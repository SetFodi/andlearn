# Python Tutorial 11: Data Science and Machine Learning
# Python-ის გაკვეთილი 11: მონაცემთა მეცნიერება და მანქანური სწავლება

"""
ეს გაკვეთილი მოიცავს:
- NumPy for numerical computing
- Pandas for data manipulation
- Matplotlib and Seaborn for data visualization
- Basic statistics and data analysis
- Introduction to machine learning
- Scikit-learn basics
- Data preprocessing and feature engineering
- Simple prediction models

This lesson covers:
- NumPy for numerical computing
- Pandas for data manipulation
- Matplotlib and Seaborn for data visualization
- Basic statistics and data analysis
- Introduction to machine learning
- Scikit-learn basics
- Data preprocessing and feature engineering
- Simple prediction models
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime, timedelta
import random
import math
from typing import List, Tuple, Dict, Any

# Note: This lesson uses mock implementations to avoid external dependencies
# ნოტი: ეს გაკვეთილი იყენებს mock იმპლემენტაციებს გარე დამოკიდებულებების თავიდან ასაცილებლად

# 1. NumPy-style Arrays (Mock Implementation) / NumPy-ს სტილის მასივები

class MockArray:
    """Mock implementation of NumPy-like array / NumPy-ს მსგავსი მასივის მოდელი"""
    
    def __init__(self, data):
        """Initialize array with data / მასივის ინიციალიზაცია მონაცემებით"""
        if isinstance(data, list):
            self.data = data
        else:
            self.data = [data]
        self.shape = (len(self.data),)
    
    def __add__(self, other):
        """Add arrays or scalar / მასივების ან სკალარის დამატება"""
        if isinstance(other, MockArray):
            return MockArray([a + b for a, b in zip(self.data, other.data)])
        else:
            return MockArray([x + other for x in self.data])
    
    def __mul__(self, other):
        """Multiply arrays or scalar / მასივების ან სკალარის გამრავლება"""
        if isinstance(other, MockArray):
            return MockArray([a * b for a, b in zip(self.data, other.data)])
        else:
            return MockArray([x * other for x in self.data])
    
    def mean(self):
        """Calculate mean / საშუალოს გამოთვლა"""
        return sum(self.data) / len(self.data)
    
    def std(self):
        """Calculate standard deviation / სტანდარტული გადახრის გამოთვლა"""
        mean_val = self.mean()
        variance = sum((x - mean_val) ** 2 for x in self.data) / len(self.data)
        return math.sqrt(variance)
    
    def max(self):
        """Find maximum value / მაქსიმალური მნიშვნელობის პოვნა"""
        return max(self.data)
    
    def min(self):
        """Find minimum value / მინიმალური მნიშვნელობის პოვნა"""
        return min(self.data)
    
    def __repr__(self):
        return f"MockArray({self.data})"

def numpy_basics_demo():
    """Demonstrate NumPy-like operations / NumPy-ს მსგავსი ოპერაციების დემონსტრაცია"""
    
    print("1. NumPy-style Operations / NumPy-ს სტილის ოპერაციები:")
    
    # Create arrays / მასივების შექმნა
    arr1 = MockArray([1, 2, 3, 4, 5])
    arr2 = MockArray([2, 4, 6, 8, 10])
    
    print(f"Array 1: {arr1}")
    print(f"Array 2: {arr2}")
    
    # Basic operations / ბაზისური ოპერაციები
    addition = arr1 + arr2
    multiplication = arr1 * arr2
    scalar_mult = arr1 * 3
    
    print(f"Addition: {addition}")
    print(f"Multiplication: {multiplication}")
    print(f"Scalar multiplication: {scalar_mult}")
    
    # Statistical operations / სტატისტიკური ოპერაციები
    print(f"Array 1 - Mean: {arr1.mean():.2f}")
    print(f"Array 1 - Std: {arr1.std():.2f}")
    print(f"Array 1 - Max: {arr1.max()}")
    print(f"Array 1 - Min: {arr1.min()}")
    
    # Matrix-like operations / მატრიცის მსგავსი ოპერაციები
    def matrix_multiply(a, b):
        """Simple matrix multiplication (2x2) / მარტივი მატრიცის გამრავლება (2x2)"""
        if len(a) != 2 or len(b) != 2:
            raise ValueError("Only 2x2 matrices supported")
        
        result = [[0, 0], [0, 0]]
        for i in range(2):
            for j in range(2):
                for k in range(2):
                    result[i][j] += a[i][k] * b[k][j]
        return result
    
    matrix_a = [[1, 2], [3, 4]]
    matrix_b = [[5, 6], [7, 8]]
    result = matrix_multiply(matrix_a, matrix_b)
    print(f"Matrix multiplication result: {result}")

# 2. Pandas-style Data Manipulation / Pandas-ის სტილის მონაცემთა მანიპულაცია

class MockDataFrame:
    """Mock implementation of Pandas DataFrame / Pandas DataFrame-ის მოდელი"""
    
    def __init__(self, data_dict=None):
        """Initialize DataFrame / DataFrame-ის ინიციალიზაცია"""
        if data_dict is None:
            self.data = {}
        else:
            self.data = data_dict
        self.index = list(range(len(next(iter(self.data.values())) if self.data else [])))
    
    def __getitem__(self, column):
        """Get column / სვეტის მიღება"""
        return self.data.get(column, [])
    
    def __setitem__(self, column, values):
        """Set column / სვეტის დაყენება"""
        self.data[column] = values
    
    def head(self, n=5):
        """Show first n rows / პირველი n მწკრივის ჩვენება"""
        result = {}
        for col, values in self.data.items():
            result[col] = values[:n]
        return MockDataFrame(result)
    
    def describe(self):
        """Generate descriptive statistics / აღწერითი სტატისტიკის გენერაცია"""
        stats = {}
        for col, values in self.data.items():
            if all(isinstance(x, (int, float)) for x in values):
                stats[col] = {
                    'count': len(values),
                    'mean': sum(values) / len(values),
                    'std': math.sqrt(sum((x - sum(values)/len(values))**2 for x in values) / len(values)),
                    'min': min(values),
                    'max': max(values)
                }
        return stats
    
    def groupby(self, column):
        """Group by column / სვეტის მიხედვით დაჯგუფება"""
        groups = {}
        col_values = self.data[column]
        for i, group_key in enumerate(col_values):
            if group_key not in groups:
                groups[group_key] = []
            groups[group_key].append(i)
        return MockGroupBy(self, groups)
    
    def sort_values(self, by, ascending=True):
        """Sort by column values / სვეტის მნიშვნელობების მიხედვით დალაგება"""
        if by not in self.data:
            return self
        
        col_values = self.data[by]
        sorted_indices = sorted(range(len(col_values)), 
                              key=lambda i: col_values[i], 
                              reverse=not ascending)
        
        new_data = {}
        for col, values in self.data.items():
            new_data[col] = [values[i] for i in sorted_indices]
        
        return MockDataFrame(new_data)
    
    def __repr__(self):
        """String representation / სტრინგული წარმოდგენა"""
        lines = []
        if not self.data:
            return "Empty DataFrame"
        
        # Header / თავსართი
        columns = list(self.data.keys())
        lines.append("  " + "  ".join(f"{col:>10}" for col in columns))
        
        # Rows / მწკრივები
        for i in range(min(5, len(self.index))):
            row = []
            for col in columns:
                if i < len(self.data[col]):
                    value = self.data[col][i]
                    row.append(f"{value:>10}")
                else:
                    row.append(f"{'':>10}")
            lines.append(f"{i} " + "  ".join(row))
        
        return "\n".join(lines)

class MockGroupBy:
    """Mock GroupBy object / მოდელი GroupBy ობიექტი"""
    
    def __init__(self, dataframe, groups):
        self.dataframe = dataframe
        self.groups = groups
    
    def mean(self):
        """Calculate mean for each group / თითოეული ჯგუფისთვის საშუალოს გამოთვლა"""
        result = {}
        for group_key, indices in self.groups.items():
            group_means = {}
            for col, values in self.dataframe.data.items():
                if all(isinstance(values[i], (int, float)) for i in indices if i < len(values)):
                    group_values = [values[i] for i in indices if i < len(values)]
                    if group_values:
                        group_means[col] = sum(group_values) / len(group_values)
            result[group_key] = group_means
        return result

def pandas_demo():
    """Demonstrate Pandas-like operations / Pandas-ის მსგავსი ოპერაციების დემონსტრაცია"""
    
    print("\n2. Pandas-style Data Manipulation / Pandas-ის სტილის მონაცემთა მანიპულაცია:")
    
    # Create sample data / ნიმუშის მონაცემების შექმნა
    data = {
        'Name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
        'Age': [25, 30, 35, 28, 32],
        'Salary': [50000, 60000, 70000, 55000, 65000],
        'Department': ['IT', 'HR', 'IT', 'Finance', 'IT']
    }
    
    df = MockDataFrame(data)
    print("Original DataFrame:")
    print(df)
    
    # Basic operations / ბაზისური ოპერაციები
    print(f"\nFirst 3 rows:")
    print(df.head(3))
    
    print(f"\nDescriptive statistics:")
    stats = df.describe()
    for col, col_stats in stats.items():
        print(f"{col}: mean={col_stats['mean']:.2f}, std={col_stats['std']:.2f}")
    
    # Sorting / დალაგება
    print(f"\nSorted by salary (descending):")
    sorted_df = df.sort_values('Salary', ascending=False)
    print(sorted_df)
    
    # Grouping / დაჯგუფება
    print(f"\nGroup by department (mean salary):")
    grouped = df.groupby('Department').mean()
    for dept, means in grouped.items():
        if 'Salary' in means:
            print(f"{dept}: {means['Salary']:.2f}")

# 3. Data Visualization (Mock) / მონაცემთა ვიზუალიზაცია (მოდელი)

class MockPlot:
    """Mock plotting functionality / მოდელი plotting ფუნქციონალი"""
    
    @staticmethod
    def plot(x, y, kind='line', title='', xlabel='', ylabel=''):
        """Create a plot description / გრაფიკის აღწერის შექმნა"""
        print(f"\n📊 Plot Created: {title}")
        print(f"Type: {kind}")
        print(f"X-axis: {xlabel} (values: {x[:5]}{'...' if len(x) > 5 else ''})")
        print(f"Y-axis: {ylabel} (values: {y[:5]}{'...' if len(y) > 5 else ''})")
        print(f"Data points: {len(x)}")
    
    @staticmethod
    def histogram(data, bins=10, title=''):
        """Create histogram description / ჰისტოგრამის აღწერის შექმნა"""
        print(f"\n📊 Histogram Created: {title}")
        print(f"Data range: {min(data):.2f} to {max(data):.2f}")
        print(f"Bins: {bins}")
        print(f"Data points: {len(data)}")
    
    @staticmethod
    def scatter(x, y, title='', xlabel='', ylabel=''):
        """Create scatter plot description / განაწილების გრაფიკის აღწერის შექმნა"""
        print(f"\n📊 Scatter Plot Created: {title}")
        print(f"X-axis: {xlabel}")
        print(f"Y-axis: {ylabel}")
        print(f"Data points: {len(x)}")
        
        # Simple correlation calculation / მარტივი კორელაციის გამოთვლა
        if len(x) == len(y) and len(x) > 1:
            mean_x = sum(x) / len(x)
            mean_y = sum(y) / len(y)
            correlation = sum((x[i] - mean_x) * (y[i] - mean_y) for i in range(len(x)))
            correlation /= math.sqrt(sum((x[i] - mean_x)**2 for i in range(len(x))) * 
                                   sum((y[i] - mean_y)**2 for i in range(len(y))))
            print(f"Correlation coefficient: {correlation:.3f}")

def visualization_demo():
    """Demonstrate data visualization / მონაცემთა ვიზუალიზაციის დემონსტრაცია"""
    
    print("\n3. Data Visualization / მონაცემთა ვიზუალიზაცია:")
    
    # Generate sample data / ნიმუშის მონაცემების გენერაცია
    x = list(range(1, 11))
    y = [i**2 + random.randint(-5, 5) for i in x]
    
    # Line plot / ხაზოვანი გრაფიკი
    MockPlot.plot(x, y, kind='line', 
                  title='Sample Line Plot', 
                  xlabel='X values', 
                  ylabel='Y values')
    
    # Histogram / ჰისტოგრამა
    hist_data = [random.gauss(50, 15) for _ in range(100)]
    MockPlot.histogram(hist_data, bins=10, title='Normal Distribution Sample')
    
    # Scatter plot / განაწილების გრაფიკი
    scatter_x = [random.uniform(0, 100) for _ in range(50)]
    scatter_y = [2 * x + random.gauss(0, 10) for x in scatter_x]
    MockPlot.scatter(scatter_x, scatter_y, 
                     title='Correlation Example',
                     xlabel='Independent Variable',
                     ylabel='Dependent Variable')

# 4. Basic Statistics / ბაზისური სტატისტიკა

def statistics_demo():
    """Demonstrate basic statistical analysis / ბაზისური სტატისტიკური ანალიზის დემონსტრაცია"""
    
    print("\n4. Basic Statistics / ბაზისური სტატისტიკა:")
    
    # Sample dataset / ნიმუშის მონაცემთა ნაკრები
    data = [23, 45, 56, 78, 32, 67, 89, 12, 34, 54, 76, 43, 65, 87, 21]
    
    # Descriptive statistics / აღწერითი სტატისტიკა
    mean = sum(data) / len(data)
    median = sorted(data)[len(data) // 2]
    mode_dict = {}
    for x in data:
        mode_dict[x] = mode_dict.get(x, 0) + 1
    mode = max(mode_dict.keys(), key=lambda x: mode_dict[x])
    
    variance = sum((x - mean) ** 2 for x in data) / len(data)
    std_dev = math.sqrt(variance)
    
    print(f"Dataset: {data}")
    print(f"Count: {len(data)}")
    print(f"Mean: {mean:.2f}")
    print(f"Median: {median}")
    print(f"Mode: {mode}")
    print(f"Standard Deviation: {std_dev:.2f}")
    print(f"Variance: {variance:.2f}")
    print(f"Range: {max(data) - min(data)}")
    
    # Percentiles / პერცენტილები
    sorted_data = sorted(data)
    q1 = sorted_data[len(sorted_data) // 4]
    q3 = sorted_data[3 * len(sorted_data) // 4]
    iqr = q3 - q1
    
    print(f"Q1 (25th percentile): {q1}")
    print(f"Q3 (75th percentile): {q3}")
    print(f"IQR (Interquartile Range): {iqr}")
    
    # Outlier detection / გამონაკლისების გამოვლენა
    lower_bound = q1 - 1.5 * iqr
    upper_bound = q3 + 1.5 * iqr
    outliers = [x for x in data if x < lower_bound or x > upper_bound]
    
    print(f"Potential outliers: {outliers}")

# 5. Basic Machine Learning / ბაზისური მანქანური სწავლება

class SimpleLinearRegression:
    """Simple linear regression implementation / მარტივი ხაზოვანი რეგრესიის იმპლემენტაცია"""
    
    def __init__(self):
        self.slope = 0
        self.intercept = 0
        self.is_fitted = False
    
    def fit(self, x, y):
        """Fit the model to data / მოდელის მონაცემებზე მორგება"""
        if len(x) != len(y):
            raise ValueError("x and y must have the same length")
        
        n = len(x)
        sum_x = sum(x)
        sum_y = sum(y)
        sum_xy = sum(x[i] * y[i] for i in range(n))
        sum_x_squared = sum(x[i] ** 2 for i in range(n))
        
        # Calculate slope and intercept / დახრილობისა და y-ჭრილის გამოთვლა
        self.slope = (n * sum_xy - sum_x * sum_y) / (n * sum_x_squared - sum_x ** 2)
        self.intercept = (sum_y - self.slope * sum_x) / n
        self.is_fitted = True
        
        # Calculate R-squared / R-squared-ის გამოთვლა
        mean_y = sum_y / n
        ss_tot = sum((y[i] - mean_y) ** 2 for i in range(n))
        ss_res = sum((y[i] - self.predict([x[i]])[0]) ** 2 for i in range(n))
        self.r_squared = 1 - (ss_res / ss_tot) if ss_tot != 0 else 0
    
    def predict(self, x):
        """Make predictions / პროგნოზების გაკეთება"""
        if not self.is_fitted:
            raise ValueError("Model must be fitted before making predictions")
        
        if isinstance(x, (int, float)):
            return self.slope * x + self.intercept
        else:
            return [self.slope * xi + self.intercept for xi in x]
    
    def score(self):
        """Get R-squared score / R-squared ქულის მიღება"""
        return self.r_squared if self.is_fitted else None

class SimpleKMeans:
    """Simple K-Means clustering implementation / მარტივი K-Means კლასტერიზაციის იმპლემენტაცია"""
    
    def __init__(self, k=3, max_iterations=100):
        self.k = k
        self.max_iterations = max_iterations
        self.centroids = []
        self.labels = []
    
    def fit(self, data):
        """Fit K-Means to data / K-Means-ის მონაცემებზე მორგება"""
        if len(data) < self.k:
            raise ValueError("Number of data points must be >= k")
        
        # Initialize centroids randomly / ცენტროიდების შემთხვევითი ინიციალიზაცია
        self.centroids = random.sample(data, self.k)
        
        for iteration in range(self.max_iterations):
            # Assign points to clusters / წერტილების კლასტერებზე დანიჭება
            new_labels = []
            for point in data:
                distances = [abs(point - centroid) for centroid in self.centroids]
                closest_cluster = distances.index(min(distances))
                new_labels.append(closest_cluster)
            
            # Update centroids / ცენტროიდების განახლება
            new_centroids = []
            for cluster_id in range(self.k):
                cluster_points = [data[i] for i, label in enumerate(new_labels) if label == cluster_id]
                if cluster_points:
                    new_centroid = sum(cluster_points) / len(cluster_points)
                    new_centroids.append(new_centroid)
                else:
                    new_centroids.append(self.centroids[cluster_id])
            
            # Check for convergence / კონვერგენციის შემოწმება
            if all(abs(new_centroids[i] - self.centroids[i]) < 0.01 for i in range(self.k)):
                break
            
            self.centroids = new_centroids
            self.labels = new_labels
        
        self.labels = new_labels
    
    def predict(self, data):
        """Predict cluster labels / კლასტერის ლეიბლების პროგნოზი"""
        predictions = []
        for point in data:
            distances = [abs(point - centroid) for centroid in self.centroids]
            closest_cluster = distances.index(min(distances))
            predictions.append(closest_cluster)
        return predictions

def machine_learning_demo():
    """Demonstrate basic machine learning / ბაზისური მანქანური სწავლების დემონსტრაცია"""
    
    print("\n5. Basic Machine Learning / ბაზისური მანქანური სწავლება:")
    
    # Linear Regression Example / ხაზოვანი რეგრესიის მაგალითი
    print("Linear Regression Example:")
    
    # Generate sample data with linear relationship / ხაზოვანი კავშირით ნიმუშის მონაცემების გენერაცია
    x_train = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    y_train = [2.1, 3.9, 6.2, 7.8, 10.1, 12.2, 13.8, 16.1, 18.0, 19.9]  # y ≈ 2x + noise
    
    # Fit model / მოდელის მორგება
    lr_model = SimpleLinearRegression()
    lr_model.fit(x_train, y_train)
    
    print(f"Model equation: y = {lr_model.slope:.2f}x + {lr_model.intercept:.2f}")
    print(f"R-squared score: {lr_model.score():.3f}")
    
    # Make predictions / პროგნოზების გაკეთება
    x_test = [11, 12, 13]
    predictions = lr_model.predict(x_test)
    print(f"Predictions for {x_test}: {[f'{p:.2f}' for p in predictions]}")
    
    # K-Means Clustering Example / K-Means კლასტერიზაციის მაგალითი
    print(f"\nK-Means Clustering Example:")
    
    # Generate sample data with clusters / კლასტერებით ნიმუშის მონაცემების გენერაცია
    cluster_data = (
        [random.gauss(10, 2) for _ in range(20)] +  # Cluster 1
        [random.gauss(30, 2) for _ in range(20)] +  # Cluster 2
        [random.gauss(50, 2) for _ in range(20)]    # Cluster 3
    )
    
    # Fit K-Means / K-Means-ის მორგება
    kmeans = SimpleKMeans(k=3)
    kmeans.fit(cluster_data)
    
    print(f"Centroids: {[f'{c:.2f}' for c in kmeans.centroids]}")
    
    # Analyze clusters / კლასტერების ანალიზი
    cluster_counts = {}
    for label in kmeans.labels:
        cluster_counts[label] = cluster_counts.get(label, 0) + 1
    
    print(f"Cluster sizes: {cluster_counts}")

# 6. Data Preprocessing / მონაცემთა წინასწარი დამუშავება

def data_preprocessing_demo():
    """Demonstrate data preprocessing techniques / მონაცემთა წინასწარი დამუშავების ტექნიკების დემონსტრაცია"""
    
    print("\n6. Data Preprocessing / მონაცემთა წინასწარი დამუშავება:")
    
    # Sample raw data with issues / ნიმუშის ნედლი მონაცემები პრობლემებით
    raw_data = {
        'age': [25, 30, None, 28, 32, 45, 35],
        'income': [50000, 60000, 70000, None, 65000, 80000, 75000],
        'score': [85, 92, 78, 88, 90, 95, 82]
    }
    
    print("Raw data with missing values:")
    for col, values in raw_data.items():
        print(f"{col}: {values}")
    
    # Handle missing values / გამოტოვებული მნიშვნელობების დამუშავება
    def handle_missing_values(data, strategy='mean'):
        """Handle missing values using specified strategy / გამოტოვებული მნიშვნელობების დამუშავება"""
        cleaned_data = {}
        
        for col, values in data.items():
            non_null_values = [v for v in values if v is not None]
            
            if strategy == 'mean' and non_null_values:
                fill_value = sum(non_null_values) / len(non_null_values)
            elif strategy == 'median' and non_null_values:
                sorted_values = sorted(non_null_values)
                fill_value = sorted_values[len(sorted_values) // 2]
            elif strategy == 'mode' and non_null_values:
                from collections import Counter
                fill_value = Counter(non_null_values).most_common(1)[0][0]
            else:
                fill_value = 0
            
            cleaned_values = [v if v is not None else fill_value for v in values]
            cleaned_data[col] = cleaned_values
        
        return cleaned_data
    
    # Clean the data / მონაცემების გაწმენდა
    cleaned_data = handle_missing_values(raw_data, strategy='mean')
    
    print(f"\nCleaned data (missing values filled with mean):")
    for col, values in cleaned_data.items():
        print(f"{col}: {[f'{v:.1f}' if isinstance(v, float) else v for v in values]}")
    
    # Feature scaling / ნიშნების მასშტაბირება
    def scale_features(data, method='standardization'):
        """Scale features using specified method / ნიშნების მასშტაბირება მითითებული მეთოდით"""
        scaled_data = {}
        
        for col, values in data.items():
            if method == 'standardization':
                mean_val = sum(values) / len(values)
                std_val = math.sqrt(sum((x - mean_val) ** 2 for x in values) / len(values))
                scaled_values = [(x - mean_val) / std_val if std_val != 0 else 0 for x in values]
            elif method == 'normalization':
                min_val = min(values)
                max_val = max(values)
                range_val = max_val - min_val
                scaled_values = [(x - min_val) / range_val if range_val != 0 else 0 for x in values]
            else:
                scaled_values = values
            
            scaled_data[col] = scaled_values
        
        return scaled_data
    
    # Scale the features / ნიშნების მასშტაბირება
    scaled_data = scale_features(cleaned_data, method='standardization')
    
    print(f"\nStandardized data (mean=0, std=1):")
    for col, values in scaled_data.items():
        print(f"{col}: {[f'{v:.2f}' for v in values]}")

def main():
    """Main function to demonstrate data science and ML / მთავარი ფუნქცია მონაცემთა მეცნიერებისა და ML-ის დემონსტრაციისთვის"""
    
    print("=== Python Data Science and Machine Learning Tutorial ===")
    print("=== Python მონაცემთა მეცნიერებისა და მანქანური სწავლების გაკვეთილი ===")
    
    numpy_basics_demo()
    pandas_demo()
    visualization_demo()
    statistics_demo()
    machine_learning_demo()
    data_preprocessing_demo()

if __name__ == "__main__":
    main()

print("\n📚 Python Data Science and Machine Learning lesson completed!")
print("📚 Python მონაცემთა მეცნიერებისა და მანქანური სწავლების გაკვეთილი დასრულდა!")

"""
Practice Tasks / პრაქტიკული დავალებები:

1. დავალება 1: შექმენით comprehensive data analysis რეალური dataset-ისთვის CSV file-იდან
Task 1: Create a comprehensive data analysis for a real dataset from a CSV file

2. დავალება 2: იმპლემენტაცია გაუკეთეთ decision tree classifier-ი from scratch
Task 2: Implement a decision tree classifier from scratch

3. დავალება 3: შექმენით data visualization dashboard რამდენიმე chart type-ით
Task 3: Create a data visualization dashboard with multiple chart types

4. დავალება 4: ჩატარეთ A/B testing analysis statistical significance-ით
Task 4: Perform A/B testing analysis with statistical significance

5. დავალება 5: შექმენით recommendation system basic collaborative filtering-ით
Task 5: Create a recommendation system using basic collaborative filtering
""" 