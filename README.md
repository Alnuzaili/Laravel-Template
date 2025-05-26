## ⚙️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/Alnuzaili/Laravel-Template.git
cd Laravel-Template
```

### 2. Install dependencies
```bash
composer install
pnpm install && pnpm run dev
```

### 3. Create environment file
```bash
cp .env.example .env
```

### 4. Generate application key
```bash
php artisan key:generate
```

### 5. Configure `.env` file
- Set your database credentials
- Configure mail settings if needed

### 6. Run database migrations
```bash
php artisan migrate
```

### 7. Run application
```bash
php artisan serve
```

---

## 🛠️ Filament Admin Setup

### 1. Install Filament
```bash
composer require filament/filament
php artisan filament:install
php artisan filament:install --panels
```

### 2. Create a Filament Admin User
```bash
php artisan make:filament-user
```
> Follow the prompts to set up email and password for admin access.

### 3. Access Admin Panel
```url
http://localhost:8000/admin
```

---

## 🗂 Project Structure

```bash
app/
bootstrap/
config/
database/
public/
resources/
  └── js/       # Vue.js components
  └── views/    # Blade templates
routes/
```
