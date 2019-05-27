# Talking Calendar

We will be given a date as a string (not a Date object). The date will always be formatted as `YYYY/MM/DD`. We will have to parse the given string and produce a human readable date.

## Tasks

- Break down input into individual parts
- Year stays the same
- Month is converted to English name
- Day has a suffix appended to it

| `-st`     | `-nd` | `-rd` | `-th`       |
| --------- | ----- | ----- | ----------- |
| 1, 21, 31 | 2, 22 | 3, 23 | 4-20, 24-30 |
