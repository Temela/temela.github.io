---
layout: post
date: 2024-06-17 08:55:46
time: 8:39pm
location: Lisbon, Portugal
inline: false
related_posts: false
title: sock merchant
giscus_comments: true
---

$$ O(n) $$ solution in Python to the sock merchant problem from HackerRank:

{% custom_highlight python linenos start_line=1 %}
# problem link https://www.hackerrank.com/challenges/sock-merchant/problem
# author: asboyer

def sock_merchant(n, ar):
    unmatched = set() # hashset
    pairs = 0
    for i in range(0, n): # iterate through the array
        if ar[i] in unmatched: # if the element is in the hashset
            unmatched.remove(ar[i]) # remove the element from the hashset
            pairs += 1 # increment the pairs
        else:
            unmatched.add(ar[i]) # add the element to the hashset
            return pairs

if __name__ == "__main__":
    print(sock_merchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])) # 3
{% endcustom_highlight %}
