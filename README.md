# CodeAnt AI Dashboard

CodeAnt AI is a responsive dashboard application built with React, featuring a sidebar navigation for desktop screens and a full-width mobile-friendly layout. The project is designed to demonstrate an intuitive user interface for navigating repositories, AI code reviews, cloud security, and more.

## Features

- **Responsive Design**:
  - Sidebar navigation for desktops.
  - Hamburger menu with a full-width overlay for mobile devices.
  - Seamless content rendering using `react-router-dom`.

- **Dynamic Sidebar**:
  - Includes navigation links with active state highlighting.
  - Integration with icons from `react-icons` for an aesthetically pleasing UI.

- **Page Routing**:
  - Organized routes using `react-router-dom`.
  - Separate layouts for desktop and mobile views.

- **Modular Architecture**:
  - Clean separation of components and routes for maintainability.
  - State-driven behavior for dynamic components like the mobile menu.

## Tech Stack

- **Frontend**:
  - React.js with TypeScript
  - TailwindCSS for styling
  - React Router DOM for routing
  - React Icons for iconography

- **Development Tools**:
  - Vite.js for fast development
  - ESLint and Prettier for code quality

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RaiDevX8/codeant.git
   cd codeant
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at [http://localhost:5173](http://localhost:5173).

## File Structure

```
codeant-ai-dashboard/
├── public/               # Public assets
├── src/
│   ├── components/       # Reusable components (e.g., Sidebar, HamburgerMenu)
│   ├── pages/            # Individual page components
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   ├── styles/           # Tailwind CSS configurations
│   └── routes/           # Centralized routing logic
└── package.json          # Project dependencies
```

## Routes

| Route Path         | Component          | Description                |
|--------------------|--------------------|----------------------------|
| `/`                | WelcomePage       | Landing page of the app    |
| `/repositories`    | RepositoriesPage  | View and manage repositories |
| `/ai-code-review`  | CodeReviewPage    | Perform AI-based code reviews |
| `/cloud-security`  | CloudSecurityPage | Access cloud security tools |
| `/how-to-use`      | HowToUsePage      | Guide to using the platform |
| `/settings`        | SettingsPage      | User settings management   |
| `/support`         | SupportPage       | Contact support team       |
| `/logout`          | LogoutPage        | Logout from the application |
| `*`                | NotFoundPage      | 404 error page             |

## Responsive Design

- **Desktop**: The sidebar is visible, providing easy navigation.
- **Mobile**: The sidebar is replaced by a hamburger menu, opening a full-width overlay when activated.


## Screenshots

| Desktop View                            | Mobile View                              |
|-----------------------------------------|------------------------------------------|
|![image](https://github.com/user-attachments/assets/d467af16-c443-4bfa-88a3-7eef0fc5415f)
 | ![image](https://github.com/user-attachments/assets/2fbd4f44-6548-4543-b444-3dab245e0296)
 |


