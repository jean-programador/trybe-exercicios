import progressNotification from "./utils/progressNotification";

class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;

  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  addBooksRead(readsCount: number): void {
    this.booksRead += readsCount;
  }

  trackReadings(readsCount: number): void {
    this.addBooksRead(readsCount)
  
    if (this.booksRead >= this.readingGoal) {
      progressNotification(
        "Congratulations! You've reached your reading goal!",
      );
      return;
    }
    progressNotification('There are still some books to go!');
  }
}

const readTracker = new ReadingTracker(20);
readTracker.trackReadings(12);
readTracker.trackReadings(9);
