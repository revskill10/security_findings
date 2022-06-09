{
    "eslintConfig": {
      "extends": ["react-app", "custom"],
      "rules": {
        "additional-rule": "warn"
      },
      "overrides": [
        {
          "files": ["**/*.(j|t)s?(x)"],
          "rules": {
            "additional-typescript-only-rule": "warn"
          }
        }
      ]
    }
  }