---
layout: post
date: 2024-06-17 11:55:46
time: 11:29pm
location: Lisbon, Portugal
inline: false
related_posts: false
title: jumping on clouds
giscus_comments: true
---

$$ O(n) $$ solution in Python to the [jumping on clouds](https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem) problem from HackerRank:

{% custom_highlight python linenos start_line=1 %}
def jumpingOnClouds(c):
    path = [0]
    i = 0
    while i < len(c) - 2:
        if c[i + 2] == 0:
            path.append(i + 2)
            i += 2
        elif c[i + 1] == 0:
            path.append(i + 1)
            i += 1
    if i == len(c) - 2:
        if c[i + 1] == 0:
            path.append(i + 1)
            i += 1

    return len(path) - 1

if __name__ == "__main__":
    print(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0])) #3
{% endcustom_highlight %}
