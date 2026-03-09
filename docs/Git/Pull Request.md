# The Art of the Pull Request 🎨✨

Pull requests (PRs) are essential for collaboration and code quality. Here’s how to make them effective and easy to review.

### 📐 Keep it Small & Focused

Limit each PR to a single feature or fix, and avoid touching unrelated files. Small PRs are easier to review and merge.

### 📝 Clear Title & Description

Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) name for PR title.

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

for example, `feat: add dark mode support` or `fix: resolve login issue`. This structure makes it easy to scan PRs at a glance.

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

In the description, include:

- **Description**: Summarize the purpose of the PR and the problem it addresses. Also try to include card/ticket link first.
- **Changes**: List key updates in the PR.
- **Acceptance Criteria**: Outline the conditions this PR must meet to be considered complete.
- **Screenshots** (if applicable): Include visual aids for UI changes.
- **References**: Link related issues or PRs (e.g., `Fixes #issue-number`)

### 📸 Add Screenshots for Visual Changes

If your PR involves UI changes, include before-and-after screenshots or a GIF to make it easy for reviewers to see the impact.

### 🧪 Test Your Code

Run tests and check that everything works as expected. Ensure there are no regressions or breaking changes.

### 💡Explain Complex Code

Add inline comments for any tricky logic to make your approach clear to reviewers.

### 🔄 Respond to Feedback Promptly

Reviewers’ time is valuable! Address feedback quickly and update your PR to keep the process moving.

## 🚀 Pro Tips

- **Draft PRs for Early Feedback**: Open a draft if you’re not ready for a full review but want input on your approach.
- **Use a PR Template**: A consistent template helps contributors include the right details every time.

## 📝 How to Set Up a PR Template

1. **Create a `.github` Directory**: In your repository’s root, create a folder called `.github`.
2. **Add a `PULL_REQUEST_TEMPLATE.md` File**: Inside `.github`, create a file named `PULL_REQUEST_TEMPLATE.md`.
3. **Customize Your Template**: Here’s a simple template:

```markdown
### Description

[Card/Ticket](url)
Briefly describe the purpose of this PR and the problem it addresses.

### Changes

- List the primary changes included in this PR.
- Change 1
- Change 2
- Change 3

### Acceptance Criteria

Outline what this PR must achieve for it to be complete.

- [ ] AC 1
- [ ] AC 2
- [ ] AC 3

### Screenshots (if applicable)

Add before-and-after screenshots for any visual changes.

### References

Link any relevant issues or other PRs (e.g., `Fixes #123`).
```

When creating a PR, this template will automatically populate the description, making PRs consistent and informative.

By keeping your PRs clear and concise, and by following best practices, you’ll make the review process smoother and more efficient for everyone! 🎉
