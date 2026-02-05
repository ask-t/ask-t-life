# GitHub Issue Templates and Commands

## Daily TODO Issue Format

### Title Format
```
YYYY-MM-DD Daily TODO
```
Example: `2026-01-30 Daily TODO`

### Body Template
```markdown
## Tasks
- [ ] タスク1
- [ ] タスク2
- [ ] タスク3

## Notes
今日の気づきやメモをここに記録

## Links
- 関連するPRやIssue
```

## gh CLI Commands

### List Daily TODOs
```bash
# All daily TODOs
gh issue list --label daily-todo

# Open issues only
gh issue list --label daily-todo --state open

# Last 10 issues
gh issue list --label daily-todo --limit 10
```

### View Issue
```bash
# View issue content
gh issue view 123

# View in web browser
gh issue view 123 --web
```

### Create New Daily TODO
```bash
# Create today's TODO
gh issue create \
  --title "$(date +%Y-%m-%d) Daily TODO" \
  --label daily-todo \
  --body "## Tasks
- [ ] 

## Notes

"
```

### Update Issue
```bash
# Update issue body
gh issue edit 123 --body "new content"

# Add a comment
gh issue comment 123 --body "progress update"

# Close issue
gh issue close 123

# Reopen issue
gh issue reopen 123
```

### Add/Remove Labels
```bash
# Add label
gh issue edit 123 --add-label "priority"

# Remove label
gh issue edit 123 --remove-label "priority"
```

## Parsing Tasks from Issue Body

The fetch-issues.js script parses checkboxes:
- `- [ ] task` → incomplete task
- `- [x] task` → completed task

## Integration with Cursor AI

When asking Cursor to work with issues:

1. **Read today's TODO**
   "今日のTODOを確認して" → `gh issue list --label daily-todo`

2. **Update task status**
   "タスク1を完了にして" → Edit issue body, change `- [ ]` to `- [x]`

3. **Add new task**
   "新しいタスクを追加して" → Edit issue body, add new checkbox

4. **Create tomorrow's TODO**
   "明日のTODOを作成して" → Create new issue with next date
