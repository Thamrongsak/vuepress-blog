---
title: Example title 
description: This is the example description for our first post.
date: 03-25-18 (mm-dd-yy)
---

<!-- # Introduction

asdasdasd asdasdas -->

## Step 1 : MongoDB คืออะไร ?

<!-- <img :src="$withBase('/bar/image.png')" alt="workplace"> -->
<img src="https://res.cloudinary.com/dokxwm6rb/image/upload/v1550112080/vuepress-blog/1_Mx3MUKkPENbaIR-vKGeLDw.jpg" alt="workplace">
<img src="https://res.cloudinary.com/demo/image/upload/w_400,h_150,c_lpad,b_green/sample.jpg">

MongoDB เป็น open-source document database โดยเป็นฐานข้อมูลแบบ NoSQL คือไม่มี relation (ความสัมพันธ์) ของตารางแบบ SQL ทั่วๆไป แต่จะเก็บข้อมูลเป็นแบบ JSON (JavaScript Object Notation) แทน การบันทึกข้อมูลทุกๆ record ใน MongoDB เราจะเรียกมันว่า Document ซึ่งจะเก็บค่าเป็น key และ value จะเห็นว่ามันก็คือ JSON นั่นแหละ ตัวอย่างเช่น 

# หัวเรื่อง (Headings)

```md
# หัวเรื่อง 1
## หัวเรื่อง 2
### หัวเรื่อง 3
#### หัวเรื่อง 4
##### หัวเรื่อง 5
###### หัวเรื่อง 6
```

# หัวเรื่อง 1
## หัวเรื่อง 2
### หัวเรื่อง 3
#### หัวเรื่อง 4
##### หัวเรื่อง 5
###### หัวเรื่อง 6


# รูปแบบตัวอักษร 

```md
ตัวอักษรเอียง ==> *ตัวเอียง* หรือ _ตัวเอียง_

ตัวอักษรหนา ==> **ตัวหนา** หรือ __ตัวหนา__

หรือทั้งเอียงและหนา ==> **ตัวหนา _ตัวเอียง_**

หรือจะขีดฆ่าตัวเอง ==> ~~ขีดฆ่า~~
```

ตัวอักษรเอียง ==> *ตัวเอียง* หรือ _ตัวเอียง_

ตัวอักษรหนา ==> **ตัวหนา** หรือ __ตัวหนา__

หรือทั้งเอียงและหนา ==> **ตัวหนา _ตัวเอียง_**

หรือจะขีดฆ่าตัวเอง ==> ~~ขีดฆ่า~~

# ลิสต์ (List)

## ลิสต์แบบเรียงลำดับ (Ordered List)

```md
1. สวัสดี
2. ฉัน
3. ชื่อ
4. บุษบา
```

1. สวัสดี
2. ฉัน
3. ชื่อ
4. บุษบา

## ลิสต์แบบไม่เรียงลำดับ (Unordered List)

```md
* สวัสดี
* สวัสดี
* สวัสดี

ได้ทั้งสองแบบ

- สวัสดี
- สวัสดี
- สวัสดี
```

* สวัสดี
* สวัสดี
* สวัสดี

ได้ทั้งสองแบบ

- สวัสดี
- สวัสดี
- สวัสดี

## หรือจะ list ซ้อน list ก็ได้ (Nested List)

```md
1. สวัสดี
   - ฉันชื่อ
     - บุษบา
       1. ลาล่าล่าล๊า
       2. ลาล่าล่าล๊า
```

1. สวัสดี
   - ฉันชื่อ
     - บุษบา
       1. ลาล่าล่าล๊า
       2. ลาล่าล่าล๊า


# ใส่รูปภาพกันเถอะ

```md
![Google ](https://www.google.co.th/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)
```

![Google ](https://www.google.co.th/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)


OR relative picture style

```md
![GitHub Logo](images/logo.png)
```

# ลิงค์ (Links)

[Links](http://www.google.com)

[In line link style](http://www.google.com "Go to Google's Homepage")

```md
[Links](http://www.google.com)

[In line link style](http://www.google.com "Go to Google's Homepage")
```

# อ้างอิง (Quotes)

## อ้างอิงธรรมดา

```md
> ตัวอย่างการอ้างอิง
> นี่คือตัวอย่าง
> การอ้างอิง
```

> ตัวอย่างการอ้างอิง
> นี่คือตัวอย่าง
> การอ้างอิง

## อ้างอิงซ้อนอ้างอิง (Nested quote)

```md
> อ้างอิง
> > ซ้อนอ้างอิง
> > > ซ้อนซ้อนอ้างอิง
```

> อ้างอิง
> > ซ้อนอ้างอิง
> > > ซ้อนซ้อนอ้างอิง

## อ้างอิง Advanced


```md
> ## อ้างอิง
> 
> 1. รายการที่ 1
> 2. รายการที่ 2
>    - รายการย่อย 1
>    - รายการย่อย 2
> ```js
> console.log("advanced md");
> ```
```

> ## อ้างอิง
> 
> 1. รายการที่ 1
> 2. รายการที่ 2
>    - รายการย่อย 1
>    - รายการย่อย 2
>
> ตัวอย่างโค้ด
> ```js
> console.log("advanced md");
> ```


# ตาราง (Tables)

```md
| หัวเรื่องแรก | หัวเรื่องที่สอง |
| --------- | ---------- |
|   เนื้อหา   |    เนื้อหา   |
|   เนื้อหา   |    เนื้อหา   |

---

|หัวข้อ|หัวข้อ|
-|-
เนื้อหา|เนื้อหา

---

| หัวเรื่องแรก | หัวเรื่องที่สอง |  หัวเรื่องสาม |
| :-------- | :--------: | ---------: |
|   ชิดซ็าย   |   กึ่งกลาง   |    ชิดขวา   |
|   ชิดซ็าย   |   กึ่งกลาง   |    ชิดขวา   |

```

| หัวเรื่องแรก | หัวเรื่องที่สอง |
| --------- | ---------- |
|   เนื้อหา   |    เนื้อหา   |
|   เนื้อหา   |    เนื้อหา   |

---

|หัวข้อ|หัวข้อ|
-|-
เนื้อหา|เนื้อหา

---

| หัวเรื่องแรก | หัวเรื่องที่สอง |  หัวเรื่องสาม |
| :-------- | :--------: | ---------: |
|   ชิดซ็าย   |   กึ่งกลาง   |    ชิดขวา   |
|   ชิดซ็าย   |   กึ่งกลาง   |    ชิดขวา   |

# การไฮไลท์โค้ดและวากยสัมพันธ์ (Code and Syntax Highlighting)


<pre lang="no-highlight"><code>insert your `code` here

or insert your ```code``` here

```
code here
```

Javascript codeb lock

```js
// or custom highlight language
console.log("Hello")
```

Java code block

```java
System.out.println("Java highlight");
```
</code></pre>

---

insert your `code` here

or insert your ```code``` here

```
code here
```

Javascript codeb lock

```js
// or custom highlight language
console.log("Hello")
```

Java code block

```java
System.out.println("Java highlight");
```
# อื่น ๆ (Others)

<details>
<summary>คลิกเพื่อชยาย</summary>
ส่วนนี้ถูกซ่อนอยู
</details>

## เส้นแบ่ง, เส้นคั่น

โค้ด

```
---
---
---
---
---
```

---
---
---
---
---