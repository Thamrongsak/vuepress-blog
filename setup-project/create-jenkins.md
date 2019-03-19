# Create Jenkins Project
## 1. เข้าไปที่เว็บไซต์ [Jenkins](http://35.197.146.45:8080/)
แล้วกรอก `Username` และ `Password`

<img src="https://res.cloudinary.com/dokxwm6rb/image/upload/v1552898474/vuepress-blog/setup-project/create-repo-3.jpg">

## 2. คลิกที่เมนู [New Item](http://35.197.146.45:8080/view/all/newJob)
## 3 Create Project
- Enter an item name กรอกชื่อ `Project`
- เลือก `Freestyle project`
    ::: tip
    - Project name (ตัวเล็ก ห้ามมีช่องว่าง) 
    - Project HTML ชื่อจะต้องมีคำว่า html-PROJECT_NAME ตามด้วยชื่อ Project
    - สามารถ Coppy Config จาก Project ที่เคยสร้างใว้แล้ว โดยการพิมพ์ชื่อ Project ในช่อง Coppy from
    :::

<img src="https://res.cloudinary.com/dokxwm6rb/image/upload/v1552899314/vuepress-blog/setup-project/create-repo-5.jpg"> 
<img src="https://res.cloudinary.com/dokxwm6rb/image/upload/v1552898881/vuepress-blog/setup-project/create-repo-4.jpg"> 

## 4 Source Code Management

<img src="https://res.cloudinary.com/dokxwm6rb/image/upload/v1552899890/vuepress-blog/setup-project/create-repo-6.jpg">

- เลือกที่ `Git`
    - Repository URL ให้กลับไป Coppy ที่ Gitlab ใช้ `git@gitlab.com:adyim-digital-technology/xxx`
    - Credentials เลือกเป็น `Jenkins`


## 5 Build Triggers

<img src="https://res.cloudinary.com/dokxwm6rb/image/upload/v1552900977/vuepress-blog/setup-project/create-repo-7.jpg">

- เลือก `Build when a change is pushed to GitLab.`
- นำ `URL Webhook` และ `Secret token` ไปใส่ที่ Gitlab

::: warning
ดูข้อที่หัวข้อ [Gitlab Integrations Webhook](#gitlab-integrations-webhook)
:::

## 6 Build

<img src="https://res.cloudinary.com/dokxwm6rb/image/upload/v1552902716/vuepress-blog/setup-project/create-repo-8.jpg">

- คลิกที่ Add Build Step แล้วเลือก Send files or execute commands over SSH
    - SSH Server => name เลือก `Website-server`
    - Transfers => Source files ให้ใส่ `**/*`
    - Transfers => Remote directory ให้ใส่ `./${JOB_BASE_NAME}`

## 7 Post-build Actions

<img src="https://res.cloudinary.com/dokxwm6rb/image/upload/v1552903116/vuepress-blog/setup-project/create-repo-9.jpg">

- คลิกที่ `Add Post-Build Action` แล้วเลือก `Slack Notifications`