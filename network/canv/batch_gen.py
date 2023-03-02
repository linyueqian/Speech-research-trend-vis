import glob
import subprocess

# get all files ending with .csv
files = glob.glob('*.csv')

# run canv.py for each file
for f in files:
    subprocess.run(['python3', 'canv.py', f])
