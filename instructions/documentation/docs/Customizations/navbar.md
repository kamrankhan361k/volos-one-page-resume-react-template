---
sidebar_position: 2
---

# Navigation Bar

We will learn how to edit navbar links, add and delete links too.

## Edit Links

To edit links text all you need to do is go to the data folder `./src/data` and open navbar.json file.

When you open this file you will find two large items,

- **navLinks** --> _The navigation buttons_
- **navInfo** --> _Some information about yourself_

![navbar](./img/_navbar/nav-main-data.jpg)

If you expanded navLinks you will find array of object each have these properties

```json
{
  "to": "section id to scroll to",
  "text": "text preview of the link"
}
```

![navbar links](./img/_navbar/nav-1.jpg)

## Add Links

To add links for example to nav links, you need to add another object and give it the given values.

![add navlink](./img/_navbar/add-link.jpg)

## Delete Link

To delete a link you need to remove the object of the link you want to remove, for example, you can delete the links we added from the previous step.

## Edit Nav Info

navInfo is some informations about yourself (contact information) like: email and phone number.

```json
{
  "title": "i.e: email",
  "text": "email@example.com"
}
```

You can edit informations or even delete or add new informations about yourself, its coustomizable.
![edit navinfo](./img/_navbar/edit-nav-info.jpg)
