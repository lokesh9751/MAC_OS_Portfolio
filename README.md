# React + Tailwind Template

A minimal React + Vite + Tailwind CSS starter template for quickly bootstrapping new projects. The default Vite demo has been removed, and Tailwind CSS is already configured so you can start building immediately.

---

## Prerequisites

Make sure you have the following installed:

- Node.js (v18 or later recommended)
- Git
- GitHub account

You can verify the installation by running:

```bash
node -v
npm -v
git --version
```

---

## Creating a New Project

### Using GitHub

1. Open this repository.
2. Click **Use this template**.
3. Select **Create a new repository**.
4. Enter your repository name.
5. Choose whether the repository should be **Public** or **Private**.
6. Click **Create repository**.

Clone your newly created repository:

```bash
git clone https://github.com/<your-username>/<your-project-name>.git
```

Move into the project directory:

```bash
cd your-project-name
```

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Using GitHub CLI

If you have GitHub CLI installed, you can create a new repository directly from this template:

```bash
gh repo create your-project-name \
  --template lokesh9751/React-Tailwind-Template \
  --public \
  --clone
```

Then run:

```bash
cd your-project-name
npm install
npm run dev
```

---

## Available Scripts

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## License

This project is licensed under the MIT License.
