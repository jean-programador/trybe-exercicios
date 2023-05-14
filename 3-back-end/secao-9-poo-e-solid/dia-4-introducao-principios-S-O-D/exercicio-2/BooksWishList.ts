type Book = {
  book: string;
  author: string;
  genre: string;
};

class BookWishList {
  private wishlist: Book[] = [];

  addToWishlist(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }
}


const wishlist = new BookWishList();

wishlist.addToWishlist({
  book: 'The Road',
  author: 'Cormac McCarthy',
  genre: 'Dystopia',
});

wishlist.showWishlist();

export default BookWishList;