# Email Form task

Create a form(reactive preffered) that has the following fields:

-   Custom SMTP server (toggle)
-   SMTP Server name
    -   **accepts only**: letters, numbers, dot, dash
-   SMTP server port
    -   positive numbers only
-   Required authentication (toggle)
-   Username
    -   letters and numbers only
    -   no numbers only values
-   Password
    -   any value
    -   min 8 characters
    -   max 16 character

### Relation

-   Custom SMTP server is **OFF**
    -   All other fields **ARE** _disabled_
    -   And **Require Authentication** is set to **OFF**
-   Custom SMTP server is **ON**
    -   All other fields **ARE** _enabled_ (except **username** and **password** - see below)
-   Required authentication is **OFF**
    -   **username** and **password** are _disabled_
-   Required authentication is **ON**
    -   **username** and **password** are _enabled_
-   **OK** button should be disabled when the form is **NOT** valid
-   **DISCARD** button should be disabled when form is not changed