import pandas as pd
import numpy as np

df = pd.read_csv('result4.csv', encoding='latin-1')
# extract year from date
df['Year'] = pd.DatetimeIndex(df['Date']).year

df.to_csv('result_with_year.csv', index=False)