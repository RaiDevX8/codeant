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
   git clone https://github.com/yourusername/codeant-ai-dashboard.git
   cd codeant-ai-dashboard
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

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Screenshots

| Desktop View                            | Mobile View                              |
|-----------------------------------------|------------------------------------------|
| ![Desktop Sidebar](./screenshots/desktop-sidebar.png) | ![Mobile Menu](./screenshots/mobile-menu.png) |

## Contact

For questions or suggestions, feel free to reach out:

- **Email**: your.email@example.com
- **GitHub**: [yourusername](https://github.com/yourusername)
- **Website**: [charanrai.tech](https://charanrai.tech)

---

Thank you for exploring CodeAnt AI!

