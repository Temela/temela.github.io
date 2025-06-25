---
layout: post
date: 2024-06-18 00:00:00
time: 3:32am
location: Lisbon, Portugal
inline: false
related_posts: false
title: new year chaos
giscus_comments: true
---

$$ O(n) $$ solution in Python to the [new year chaos](https://www.hackerrank.com/challenges/new-year-chaos/problem) problem from HackerRank:

{% custom_highlight python linenos start_line=1 %}
def minimumBribes(q):
    b = 0
    i = len(q) - 1

    while i > 0:
        max_ind = i
        c = 1
        # yes, it's still O(n) because the inner loop is bounded by 3
        for j in range(1, 4):
            if q[max_ind] < q[max_ind - c]:
                max_ind = i - j
                c = 1
            else:
                c += 1
        if i - max_ind > 2:
            print("Too chaotic")
            return
        b += i - max_ind
        q.pop(max_ind)
        i-=1
    print(b)

if __name__ == "__main__":
    minimumBribes([2, 5, 1, 3, 4]) # Too chaotic
{% endcustom_highlight %}

This problem was the bane of my existence for a couple hours. Then I got it. Feels great.