# Contributing to YCQ-Website

Thank you for your interest in contributing to the YCQ-Website project! This document provides guidelines for contributing to the repository.

## 🚀 Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm or pnpm package manager
- Git

### Setup
1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/YCQ-Website.git`
3. Install dependencies: `npm install`
4. Create a new branch: `git checkout -b feature/your-feature-name`

## 📝 Contribution Process

### 1. Making Changes
- Make your changes in your feature branch
- Follow the existing code style and conventions
- Write clear, concise commit messages
- Test your changes locally

### 2. Running Tests
```bash
# Run linting
npm run lint

# Build the project
npm run build

# Start development server
npm run dev
```

### 3. Submitting a Pull Request

When you're ready to submit your changes:

1. **Push your branch** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open a Pull Request** from your fork to the main repository

3. **Fill out the PR template** completely with:
   - Clear description of changes
   - Type of change (bug fix, feature, etc.)
   - Related issue numbers
   - Testing performed
   - Screenshots (if applicable)

4. **Request Review**: 
   - The CODEOWNERS file will automatically request review from maintainers with write access
   - You can also manually request reviews from specific team members

5. **Address Review Feedback**:
   - Respond to reviewer comments
   - Make requested changes
   - Push updates to your branch (the PR will update automatically)

## 👥 Code Review Process

### For Contributors
- Be patient - reviews may take time depending on maintainer availability
- Be responsive to feedback and questions
- Be open to constructive criticism
- Keep your PR focused on a single feature or fix

### For Reviewers
- Review PRs in a timely manner
- Provide constructive, actionable feedback
- Test changes locally when necessary
- Use the "Request Changes" or "Approve" options appropriately
- Only approve if you have write access and the changes meet quality standards

## 📋 Types of Contributions

### Content Contributions
- Case study submissions
- Documentation improvements
- Business use case examples
- Industry-specific guides

### Technical Contributions
- Performance optimizations
- Accessibility improvements
- Mobile experience enhancements
- Integration examples
- Bug fixes
- New features

## 🎨 Code Style Guidelines

### TypeScript/React
- Use TypeScript for all new code
- Follow functional component patterns
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components focused and reusable

### Styling
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and layout
- Ensure accessibility (WCAG 2.1 Level AA)

### Git Commits
- Use conventional commit format: `type(scope): description`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- Example: `feat(landing): add new hero section`

## 🔍 Pull Request Requirements

Before submitting a PR, ensure:
- [ ] Code builds without errors
- [ ] Linting passes (`npm run lint`)
- [ ] All existing functionality still works
- [ ] New features include appropriate documentation
- [ ] PR description is complete and clear
- [ ] Commits are clean and well-organized

## 🏆 Recognition

Contributors will be recognized in:
- GitHub contributors list
- Release notes (for significant contributions)
- Project documentation (where applicable)

## 📞 Getting Help

If you need help or have questions:
- Check existing issues and documentation
- Open an issue for bugs or feature requests
- Reach out to maintainers through GitHub discussions

## 📄 License

By contributing to YCQ-Website, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to YCQ-Website! Your efforts help make this project better for everyone.
