# Contributing to Tetisnet Spinning Wheel

First off, thank you for considering contributing to Tetisnet Spinning Wheel! 🎉

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible.

**Bug Report Template:**
- **Description**: A clear and concise description of what the bug is
- **Steps to Reproduce**: Step-by-step instructions to reproduce the behavior
- **Expected Behavior**: What you expected to happen
- **Screenshots**: If applicable, add screenshots to help explain your problem
- **Environment**: 
  - OS: [e.g. iOS, Android, Windows, macOS]
  - Browser: [e.g. Chrome, Safari, Firefox]
  - Version: [e.g. 91.0.4472.124]

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Title**: A clear and descriptive title
- **Description**: A detailed description of the suggested enhancement
- **Rationale**: Why this enhancement would be useful
- **Implementation**: If you have ideas about how to implement the feature

### Pull Requests

1. **Fork** the repository
2. **Create** a feature branch from `main`:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make** your changes
4. **Test** your changes thoroughly
5. **Commit** your changes with a descriptive message:
   ```bash
   git commit -m "Add amazing feature that does X"
   ```
6. **Push** to your branch:
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Create** a Pull Request

### Development Setup

1. **Clone** your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/tetisnet-spinning-wheel.git
   cd tetisnet-spinning-wheel
   ```

2. **Install** development dependencies (optional):
   ```bash
   npm install
   ```

3. **Start** local development server:
   ```bash
   npm run dev
   # or
   python -m http.server 8000
   ```

4. **Open** `http://localhost:8000` in your browser

### Code Style Guidelines

#### JavaScript
- Use modern ES6+ features where appropriate
- Use `const` and `let` instead of `var`
- Use arrow functions for short functions
- Add comments for complex logic
- Follow existing naming conventions

#### CSS
- Use CSS Grid/Flexbox for layouts
- Use CSS custom properties (variables) for theming
- Mobile-first responsive design
- Use relative units (rem, em, %) where possible

#### HTML
- Use semantic HTML5 elements
- Ensure accessibility with proper ARIA labels
- Include proper meta tags for PWA functionality
- Validate HTML markup

### Testing

Before submitting a pull request, please test:

1. **Functionality**: Ensure all features work as expected
2. **Responsive Design**: Test on different screen sizes
3. **PWA Features**: Test offline functionality and installation
4. **Performance**: Check loading times and animations
5. **Accessibility**: Verify keyboard navigation and screen readers

### PWA Best Practices

When contributing to PWA features:
- Test service worker registration and updates
- Verify offline functionality
- Check manifest.json validity
- Test on multiple browsers and devices
- Ensure HTTPS requirements are met

### Localization

When adding text content:
- Add both English and Persian versions
- Use proper RTL layout for Persian text
- Test with Persian fonts (Vazir, Amiri)
- Ensure text fits in different languages

### Performance Considerations

- Keep bundle size minimal (currently < 100KB)
- Optimize images and use modern formats
- Use efficient CSS and JavaScript
- Test on slower devices and connections

### Git Commit Messages

Write clear commit messages:
- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters or less
- Reference issues and pull requests liberally

**Examples:**
```
Add wheel rotation animation improvements
Fix PWA installation on iOS Safari
Update Persian font loading strategy
Improve accessibility for screen readers
```

### Review Process

All submissions require review. Here's what we look for:

1. **Code Quality**: Clean, readable, and maintainable code
2. **Functionality**: Features work as intended without breaking existing functionality
3. **Design**: Follows existing design patterns and is visually consistent
4. **Performance**: Doesn't significantly impact loading or runtime performance
5. **Accessibility**: Maintains or improves accessibility standards
6. **Documentation**: Updates documentation if needed

### Questions?

Feel free to create an issue for:
- Questions about the codebase
- Clarifications on contribution guidelines
- Discussion about potential features

## Code of Conduct

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment include:
- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community

### Enforcement

Project maintainers are responsible for clarifying standards and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.

---

Thank you for contributing! 🙏

**Made with ❤️ for the open source community** 