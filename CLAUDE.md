# Jekyll Stories Site Guidelines

## Build & Test Commands
- `bundle exec jekyll s -l` - Run development server
- `JEKYLL_ENV=production bundle exec jekyll s -l` - Run in production mode
- `bundle exec jekyll b` - Build site
- `bundle exec htmlproofer _site` - Test site with HTML-proofer
- `bash tools/run.sh` - Run development server with options (-p for production)
- `bash tools/test.sh` - Build and test with HTML-proofer

## Code Style Guidelines
- **Ruby**: 2-space indentation, frozen string literals
- **Markdown**: Use standard Markdown syntax for posts
- **YAML Front Matter**: Required for all pages/posts
- **File Naming**: Use `YYYY_MM_DD.md` format for posts
- **Content**: Keep images in assets directory
- **Error Handling**: Use Jekyll's built-in error handling
- **Git Hooks**: Post dates are automatically tracked with Git