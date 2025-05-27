## ⚙️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/Alnuzaili/Laravel-Template.git
cd Laravel-Template
```

### 2. Install dependencies
```bash
composer install
pnpm install && pnpm run build
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
php artisan db:seed

php artisan shield:install admin
```

### 7. Run application
```bash
php artisan serve
```

---

## 🛠️ Filament Access Admin Panel
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
