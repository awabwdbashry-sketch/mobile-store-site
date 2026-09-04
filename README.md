# 🛍️ Mobile Store Site

## 🇸🇩 النسخة العربية

### 📱 عن المشروع

**Mobile Store Site** هو متجر إلكتروني مبني باستخدام **PHP وMySQL**، مصمم لتوفير تجربة تسوق إلكترونية متكاملة وسهلة الاستخدام.

المشروع يحتوي على نظام لعرض المنتجات والتصنيفات، إدارة سلة المشتريات، المستخدمين والطلبات، بالإضافة إلى لوحة تحكم لإدارة محتوى المتجر ومتابعة البيانات.

---

## ✨ المميزات

### 🛒 تجربة التسوق

- 🛍️ عرض المنتجات بطريقة منظمة.
- 🗂️ تصنيف المنتجات حسب الفئات.
- 🔎 البحث عن المنتجات.
- ⭐ عرض تقييمات المنتجات.
- 💖 إضافة المنتجات للمفضلة.
- 🛒 إضافة المنتجات إلى سلة المشتريات.
- ➕ زيادة كمية المنتج.
- ➖ تقليل كمية المنتج.
- 🗑️ حذف المنتجات من السلة.
- 💰 حساب إجمالي الطلب تلقائياً.
- 📦 الانتقال إلى صفحة إتمام الطلب.

### 👤 المستخدمون

- 🔐 تسجيل الدخول للمستخدمين.
- 👤 حسابات المستخدمين.
- 🛒 ربط سلة المشتريات بالمستخدم.
- ❤️ إدارة المفضلة.
- 📋 متابعة الطلبات.

### ⚙️ لوحة التحكم

- 📊 لوحة تحكم لمتابعة المتجر.
- 📦 إدارة المنتجات.
- 🗂️ إدارة التصنيفات.
- 👥 إدارة المستخدمين.
- 🛍️ متابعة الطلبات.
- ⭐ متابعة التقييمات.
- 📈 إحصائيات وتحليلات المتجر.
- 🔄 تحديث بعض بيانات لوحة التحكم بشكل ديناميكي.
- 📝 تسجيل الأنشطة داخل النظام.

### 🎨 التصميم

- 🇸🇩 واجهة عربية RTL.
- 📱 تصميم Responsive لمختلف أحجام الشاشات.
- ✨ تصميم عصري وفاخر.
- 🌹 ألوان Burgundy / Maroon مع لمسات ذهبية.
- 🔤 استخدام خط Cairo.
- 🎯 بطاقات منتجات تفاعلية.
- 📲 تجربة مناسبة للموبايل والكمبيوتر.

---

## 🧰 التقنيات المستخدمة

- 🐘 **PHP**
- 🗄️ **MySQL**
- 🌐 **HTML5**
- 🎨 **CSS3**
- ⚡ **JavaScript**
- 🅱️ **Bootstrap 5.3.3**
- 🔤 **Google Fonts — Cairo**
- 🎯 **Bootstrap Icons**
- 🔔 **SweetAlert2**
- 🎨 **Font Awesome**

---

## 🗃️ قاعدة البيانات

يعتمد المشروع على قاعدة بيانات MySQL لتخزين وإدارة البيانات الأساسية للمتجر، مثل:

- 👤 المستخدمين
- 📦 المنتجات
- 🗂️ التصنيفات
- 🛒 سلة المشتريات
- 📋 الطلبات
- ⭐ التقييمات
- ❤️ المفضلة
- 📊 سجلات الأنشطة

---

## 📁 هيكل المشروع

```text
mobile-store-site/
│
├── admin/
│   ├── dashboard.php
│   ├── products/
│   ├── categories/
│   ├── orders/
│   └── ...
│
├── uploads/
│   └── product images
│
├── config/
│   └── database.php
│
├── index.php
├── products.php
├── product-details.php
├── cart.php
├── checkout.php
├── login.php
├── register.php
├── wishlist.php
├── search.php
│
├── add-to-cart.php
├── update-cart.php
├── remove-cart.php
│
└── ...
```

> ملاحظة: هيكل المجلدات أعلاه يمثل المكونات الرئيسية للمشروع، وقد تختلف بعض أسماء الملفات أو المجلدات حسب النسخة الموجودة في المشروع.

---

## 🚀 تشغيل المشروع محلياً

### 1️⃣ تثبيت المتطلبات

تأكد من وجود:

- XAMPP أو WAMP
- PHP
- MySQL
- Apache

### 2️⃣ وضع المشروع

ضع مجلد المشروع داخل:

```text
C:\xampp\htdocs\
```

أو في حالة WAMP:

```text
C:\wamp64\www\
```

### 3️⃣ إنشاء قاعدة البيانات

افتح:

```text
phpMyAdmin
```

ثم:

1. أنشئ Database جديدة.
2. استورد ملف قاعدة البيانات الخاص بالمشروع.
3. تأكد من اسم قاعدة البيانات.
4. عدّل بيانات الاتصال داخل ملف:

```text
config/database.php
```

### 4️⃣ تشغيل Apache وMySQL

من لوحة XAMPP أو WAMP شغّل:

```text
Apache
MySQL
```

### 5️⃣ فتح الموقع

افتح المتصفح وانتقل إلى:

```text
http://localhost/mobile-store-site/
```

---

## 🔐 ملاحظات أمنية

المشروع يحتوي على عدد من إجراءات الحماية المستخدمة في أجزاء النظام، مثل:

- 🔒 جلسات المستخدمين.
- 🛡️ حماية صفحات الإدارة.
- 🧹 التحقق من البيانات المدخلة.
- 🖼️ التحقق من أنواع وأحجام الصور المرفوعة.
- 🔐 حماية عمليات الإدارة.
- 📝 تسجيل الأنشطة المهمة.

---

## 🎯 الهدف من المشروع

يهدف المشروع إلى بناء **منصة تجارة إلكترونية متكاملة** يمكن استخدامها كنظام أساسي لمتجر إلكتروني، مع إمكانية تطويرها لاحقاً وإضافة أنظمة دفع وشحن وإشعارات وميزات أخرى.

---

## 👨‍💻 المطور

**Awab Bashary | AwabBuilds**

💻 Web Developer  
🇸🇩 Sudan

GitHub: **awabwdbashry-sketch**

---

# 🇬🇧 English Version

## 📱 About the Project

**Mobile Store Site** is an e-commerce website built with **PHP and MySQL**, designed to provide a complete and user-friendly online shopping experience.

The project includes product browsing, categories, shopping cart management, users, orders, favorites, reviews, and an administration dashboard for managing the store.

---

## ✨ Features

### 🛒 Shopping Experience

- 🛍️ Organized product listing.
- 🗂️ Product categories.
- 🔎 Product search.
- ⭐ Product ratings.
- 💖 Wishlist support.
- 🛒 Add products to cart.
- ➕ Increase product quantity.
- ➖ Decrease product quantity.
- 🗑️ Remove products from cart.
- 💰 Automatic order total calculation.
- 📦 Checkout flow.

### 👤 Users

- 🔐 User authentication.
- 👤 User accounts.
- 🛒 User-specific shopping carts.
- ❤️ Wishlist management.
- 📋 Order management.

### ⚙️ Admin Dashboard

- 📊 Store dashboard.
- 📦 Product management.
- 🗂️ Category management.
- 👥 User management.
- 🛍️ Order management.
- ⭐ Review management.
- 📈 Store analytics.
- 🔄 Dynamic dashboard updates.
- 📝 Activity logging.

### 🎨 UI & Design

- 🌍 Arabic RTL interface.
- 📱 Responsive design.
- ✨ Modern premium interface.
- 🌹 Burgundy / Maroon color palette with gold accents.
- 🔤 Cairo Google Font.
- 🎯 Interactive product cards.
- 📲 Mobile-friendly experience.

---

## 🧰 Technologies

- 🐘 **PHP**
- 🗄️ **MySQL**
- 🌐 **HTML5**
- 🎨 **CSS3**
- ⚡ **JavaScript**
- 🅱️ **Bootstrap 5.3.3**
- 🔤 **Google Fonts — Cairo**
- 🎯 **Bootstrap Icons**
- 🔔 **SweetAlert2**
- 🎨 **Font Awesome**

---

## 🗃️ Database

The project uses **MySQL** to store and manage the main store data, including:

- 👤 Users
- 📦 Products
- 🗂️ Categories
- 🛒 Shopping Cart
- 📋 Orders
- ⭐ Reviews
- ❤️ Wishlist
- 📊 Activity Logs

---

## 📁 Project Structure

```text
mobile-store-site/
│
├── admin/
│   ├── dashboard.php
│   ├── products/
│   ├── categories/
│   ├── orders/
│   └── ...
│
├── uploads/
│   └── product images
│
├── config/
│   └── database.php
│
├── index.php
├── products.php
├── product-details.php
├── cart.php
├── checkout.php
├── login.php
├── register.php
├── wishlist.php
├── search.php
│
├── add-to-cart.php
├── update-cart.php
├── remove-cart.php
│
└── ...
```

> Note: The structure above represents the main project components. Exact filenames and folders may vary depending on the current project version.

---

## 🚀 Local Setup

### 1️⃣ Requirements

Make sure you have:

- XAMPP or WAMP
- PHP
- MySQL
- Apache

### 2️⃣ Project Installation

Place the project inside:

```text
C:\xampp\htdocs\
```

Or with WAMP:

```text
C:\wamp64\www\
```

### 3️⃣ Database Setup

Open:

```text
phpMyAdmin
```

Then:

1. Create a new database.
2. Import the project's SQL database file.
3. Make sure the database name is correct.
4. Update the database connection inside:

```text
config/database.php
```

### 4️⃣ Start the Server

Start:

```text
Apache
MySQL
```

from XAMPP or WAMP.

### 5️⃣ Open the Website

Visit:

```text
http://localhost/mobile-store-site/
```

---

## 🔐 Security

The project includes several security-related practices in different parts of the system, including:

- 🔒 User sessions.
- 🛡️ Admin page protection.
- 🧹 Input validation.
- 🖼️ Image type and size validation.
- 🔐 Protected administration operations.
- 📝 Activity logging.

---

## 🎯 Project Goal

The goal of this project is to build a **complete e-commerce platform** that can serve as a foundation for an online store and can be extended later with payment gateways, shipping systems, notifications, and additional features.

---

## 👨‍💻 Developer

**Awab Bashary | AwabBuilds**

💻 Web Developer  
🇸🇩 Sudan

GitHub: **awabwdbashry-sketch**

---

## ⭐ Repository

**Mobile Store Site**

`awabwdbashry-sketch/mobile-store-site`
