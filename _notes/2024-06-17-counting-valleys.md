---
layout: post
date: 2024-06-17 09:55:46
time: 10:32pm
location: Lisbon, Portugal
inline: false
related_posts: false
title: counting valleys
giscus_comments: true
---

$$ O(n) $$ solution in Python to the [counting valleys](https://www.hackerrank.com/challenges/counting-valleys/problem) problem from HackerRank:

{% custom_highlight python linenos %}
def countingValleys(steps, path):
    level = 0
    valleys = 0
    for i in range(steps):     
        if path[i] == 'U':
            level += 1
        else:
            level -= 1
        if path[i] == 'U' and level == 0:
            valleys += 1

    return valleys

if __name__ == '__main__':
    steps = 8
    path = 'UDDDUDUU'
    print(countingValleys(steps, path)) # 1
{% endcustom_highlight %}
