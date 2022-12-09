<h1 align="center">
  Teti Lib Library Frontend
</h1>
<p align="center">Website Teti Library | Kelompok 2 Pengembangan Aplikasi Web</p>

<br>

## Related Repository

- Frontend Repo: [https://github.com/lutfiandri/teti-lib-frontend](https://github.com/lutfiandri/teti-lib-frontend) (current)
- Backend Repo: [https://github.com/lutfiandri/teti-lib](https://github.com/lutfiandri/teti-lib)

## Links

- Slide Presentasi: [Click Here](https://www.canva.com/design/DAFSQCxxR6Q/3yai7zDDPaF2WBaAPU3OfA/view?utm_content=DAFSQCxxR6Q&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1)
- Front End: https://teti-library.vercel.app/
- Back End: https://teti-lib.vercel.app/
- Postman Docs: [Click Here](https://documenter.getpostman.com/view/23529898/2s8YzS1iXv)

## Development Setup

### Prerequisites

- [Download](https://nodejs.org/en/download/) and install **Node.js** version `16.15` or higher.
- [Download](https://classic.yarnpkg.com/lang/en/docs/install/) and install **yarn** version `1.22` or higher.
- Clone this project and open it using your favorite code editor.

### Setting Up Project

- Install required dependencies:

  ```bash
  yarn
  ```

- Run the program:

  ```bash
  # on development
  yarn dev
  ```

## Branch Naming

`<type>/<short_description>`

- `<type>` :
  - feature: saya menambahkan fitur baru
  - fix: saya memperbaiki fitur

contoh: feature/menambahkan-navbar <br/>
[Learn More](https://nvie.com/posts/a-successful-git-branching-model/)

## Commit Messages

`<type>(scope): <short_summary>` <br/>
[Baca lebih lengkap](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)

## Folder Structure

```
- docs                 # asset dokumentasi
- public               # bisa diakses public
- src
  - main.js            # react bootstrapper
  - App.js             # routing pages
  - assets             # asset non-public (gambar, font, dll)
  - components
    - elements         # component element satuan
    - layouts          # component layout
    - templates        # component template yang dapat digunakan berulang kali
  - pages              # halaman - halaman
  - styles             # styling dan tema
  - utils
    - helpers          # pembantu
    - hooks            # react hook
    - services         # fetcher dari api
```

## Import Path Mapping

Gunakan path mapping. `@` akan me-mapping-kan ke src. Contoh:

```javascript
import Home from "@/pages/Home.jsx";
import Button from "@/components/elements/Button.jsx";
```
