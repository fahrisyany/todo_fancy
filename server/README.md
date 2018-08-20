# StickerGram

List of routes user: 

| **Route**  |  **HTTP** | **Description** | **Parameters** |
|------------|-----------|-----------------|----------------|
| /api/users/signup | POST | Signup new user | fullname, email, password |
| /api/users/signin | POST | Signin user | email, password |

List of routes sticker: 

| **Route**  |  **HTTP** | **Description** | **Parameters** |
|------------|-----------|-----------------|----------------|
| /api/stickers | GET | Get all sticker |  |
| /api/stickers | POST | Add new sticker | name, imgUrl |
| /api/stickers/:id | PUT | Update sticker | name, imgUrl |
| /api/stickers/:id | DELETE | Delete sticker | id |
| /api/stickers/:q | GET | Search sticker |
| /api/stickers/download | GET | Download Sticker to your file | image
| /upload | POST | Upload Sticker to Google Cloud Storage | image
