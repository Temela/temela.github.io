---
layout: post
date: 2024-06-20 00:00:00
time: 3:34am
location: Lisbon, Portugal
inline: false
related_posts: false
title: weather station 5
giscus_comments: true
---

MySQL solution to the [weather observation station 5](https://www.hackerrank.com/challenges/weather-observation-station-5/problem) problem from HackerRank:

{% custom_highlight sql linenos %}
CREATE TABLE STATION (
    ID INT PRIMARY KEY,
    CITY VARCHAR(21)
); 

INSERT INTO STATION VALUES(1, 'Ohio');
INSERT INTO STATION VALUES(2, 'Boston');
INSERT INTO STATION VALUES(3, 'Loston');


SELECT CITY, CITY_LENGTH
FROM (
    SELECT CITY, LENGTH(CITY) AS CITY_LENGTH
    FROM STATION
    ORDER BY LENGTH(CITY) ASC, CITY
    LIMIT 1
) AS shortest

UNION ALL

SELECT CITY, CITY_LENGTH
FROM (
    SELECT CITY, LENGTH(CITY) AS CITY_LENGTH
    FROM STATION
    ORDER BY LENGTH(CITY) DESC, CITY
    LIMIT 1
) AS longest;

{% endcustom_highlight %}
