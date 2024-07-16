# LibraryFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.6.

## Launch Development server

Run `npm run dev` for a development server. When you excecute this command, the application automatically will launched to your brouse or well you also can navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build a production instance of the application

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Eslint and Prettier configuration

In order to maintain a consistent code quality, it was defined a ruleset to follow with Eslint and Prettier that helps us to get a good code consistency. To configure this ruleset we apply a series of eslint plugins and global format to adhere with. This rules should be defined in the next files with this proccess:

1. Create two files in the `src` path called .eslintrc.json and .prettierrc.json.
2. Fill with next information and rules configurations:

### .eslintrc.json

```json
{
	"root": true,
	"ignorePatterns": ["projects/**/*", "src/app/**/*.spec.ts"],
	"overrides": [
		{
			"files": ["*.ts"],
			"extends": [
				"plugin:@angular-eslint/recommended",
				"plugin:@angular-eslint/template/process-inline-templates",
				"plugin:import/recommended"
			],
			"plugins": ["unused-imports"],
			"rules": {
				"@angular-eslint/directive-selector": [
					"warn",
					{
						"type": "attribute",
						"prefix": ["app", "shared", "dashboard"],
						"style": "camelCase"
					}
				],
				"@angular-eslint/component-selector": [
					"warn",
					{
						"type": "element",
						"prefix": ["app", "shared", "dashboard"],
						"style": "kebab-case"
					}
				],
				"import/order": [
					"error",
					{
						"groups": [
							["builtin", "external"],
							["internal", "parent", "sibling", "index"]
						],
						"newlines-between": "always",
						"alphabetize": {
							"order": "asc",
							"caseInsensitive": true
						},
						"pathGroups": [
							{
								"pattern": "@angular/**",
								"group": "external",
								"position": "before"
							},
							{
								"pattern": "primeng/**",
								"group": "external",
								"position": "before"
							},
							{
								"pattern": "src/**",
								"group": "internal",
								"position": "after"
							}
						],
						"pathGroupsExcludedImportTypes": ["builtin"]
					}
				],
				"no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
				"unused-imports/no-unused-imports": "error",
				"unused-imports/no-unused-vars": [
					"warn",
					{ "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
				],
				"import/no-unresolved": "off"
			}
		},
		{
			"files": ["*.html"],
			"extends": ["plugin:@angular-eslint/template/recommended", "plugin:@angular-eslint/template/accessibility"],
			"rules": {
				"@angular-eslint/template/no-negated-async": "error",
				"@angular-eslint/template/elements-content": "off"
			}
		}
	]
}
```

### .prettierrc.json

```json
{
	"arrowParens": "always",
	"bracketSpacing": true,
	"insertPragma": false,
	"printWidth": 120,
	"proseWrap": "preserve",
	"quoteProps": "as-needed",
	"requirePragma": false,
	"semi": true,
	"singleQuote": true,
	"tabWidth": 2,
	"trailingComma": "es5",
	"useTabs": true,
	"endOfLine": "auto"
}
```

3. To test that all rules were applied when you introduce a new change, you must execute the script named `npm run lint-and-format` to detect possibles errors and violations to the standar.
4. If errors were detected, you can run `npm run fix-and-format` script to try automatic corrections of them. If this errors couldn't be repaired by the script, you should identify in the terminal and then fix them in order to pass the Eslint test.

## Setting up Environment Variables

This project uses `ngx-env/builder`, which provides a way to manage environment variables in both development and production stages. To correctly utilize these variables in the development environment, you need to configure a `.env` file at this path: `src/.env`. In this file, you can set up the base URL for the API connection and an encryption key required by `crypto-js`. Place the file as described above:

```
APP_BASE_URL=http://localhost:8080/api
APP_ENCRYPTION_KEY=Your-encrypted-and-secret-key
```

Ensure that you are using the correct `localhost:8080` port, as the Docker image used to run the backend is configured on that port. Additionally, you can set the value of `APP_ENCRYPTION_KEY` as you prefer.
