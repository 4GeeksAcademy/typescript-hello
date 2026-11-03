// Create an empty cinema seating arrangement
function initializeSeats(): number[][] {
    const seats: number[][] = [];

    // Loop through the 8 rows
    for (let i = 0; i < 8; i++) {
        // Create an empty row
        const row: number[] = [];

        // Add 10 available seats to each row
        for (let j = 0; j < 10; j++) {
            row.push(0);
        }

        // Add the completed row to the seating matrix
        seats.push(row);
    }

    return seats;
}

// Reserve a seat if it is available 
function reserveSeat(seats: number[][], row: number, column: number): string { 
    // Convert customer numbers to array indexes
    const rowIndex = row - 1; 
    const columnIndex = column - 1; 

    // Check if the requested seat exists 
    if (rowIndex < 0 || rowIndex >= seats.length || columnIndex < 0 || columnIndex >= seats[rowIndex].length) {
        return "Invalid seat position. Please choose a valid row and seat"; 
    }

    // Check if the seat is occupied
    if (seats[rowIndex][columnIndex] === 1) {
        return "Sorry, this seat is already occupied"; 
    }

    // Reserve the seat if it is available
    seats[rowIndex][columnIndex] = 1; 
    return `Reservation confirmed: Row ${row}, Seat ${column}.`; 
}

// Count occupied and available seats
function countSeats(seats: number[][]): void {
    let occupied = 0; 
    let available = 0; 

    for (let i = 0; i < seats.length; i++) {
        for (let j = 0; j < seats[i].length; j++) {
            if (seats[i][j] === 1) { 
                occupied++; 
            } else {
                available++;
            }
        }
    }
    console.log("Seat Summary:"); 
    console.log("Occupied seats:", occupied);
    console.log("Available seats:", available);
    console.log("Total seats:", occupied + available); 
}

// Display the cinema seating arrangement
function displaySeats(seats: number[][]): void {
    // Display column numbers
    console.log("  1 2 3 4 5 6 7 8 9 10"); 

    // Loop through each row 
    for (let i = 0; i < seats.length; i++) {
        // Display the row number 
        let rowDisplay = `${i + 1} | `; 

        // Loop through each seat
        for (let j = 0; j < seats[i].length; j++) {
            if (seats[i][j] === 1) { 
                rowDisplay += "X ";
            } else {
                rowDisplay += "L ";
            }
        }
        console.log(rowDisplay);
    }
}

//Find the first pair of adjacent available seats
function findAdjacentSeats(seats: number[][]): string {
    // Loop through each row 
    for (let i = 0; i < seats.length; i++) {
        // Check each seat and the seat immediately after it 
        for (let j = 0; j < seats[i].length - 1; j++) {
            // Check whether both seats are available
            if (seats[i][j] === 0 && seats[i][j + 1] === 0) {
                return `Available pair found: Row ${i + 1}, Seats ${j + 1} and ${j + 2}`;
            }
        }
    }
    return "No adjacent available seats found";
}

// Initialize the cinema
const cinema = initializeSeats();
console.log(reserveSeat(cinema, 1, 1));

// Display the seating matrix
console.log(cinema);

// Display seats with formatting
displaySeats(cinema);

// Count and display seat summary
countSeats(cinema);
console.log(findAdjacentSeats(cinema)); 

