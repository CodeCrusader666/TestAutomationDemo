### Test Automation Demo
This repository will contain QA Automation demo project.

### Installing dependencies
```
npm ci
```
### Environment variables
This project requires the following environment variables
* OPENAI_API_KEY
* MAILOSAUR_API_KEY

### Running all tests locally
```
npx playwright test --headed
```

### Running a single test file locally
```
npx playwright test tests/todo-page.spec.ts --headed
```

### Running a single test locally
* add **.only** after **test** keyword and run
```
 npx playwright test --headed
```

### Running lint to verify code style
```
 npm run lint
```

### Running prettier to reformat code
```
 npm run format
```

### Debugging tests
```
npx playwright test --debug
```

### Running tests on CI
* Open https://github.com/CodeCrusader666/TestAutomationDemo/actions/workflows/tests.yaml
* Click **Run** 
