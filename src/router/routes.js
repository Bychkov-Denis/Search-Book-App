import SearchPage from "../pages/SearchPage";
import BookPage from "../pages/BookPage";

export const routes = [
    { path: "/" , component: <SearchPage /> },
    { path: "/book-:bookId" , component: <BookPage /> }
]