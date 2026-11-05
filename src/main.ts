type SeatState = 0 | 1;
type SeatingMatrix = SeatState[][];

type ReservationResult =
    | { success: true; message: string }
    | { success: false; message: string };

type SeatSummary = {
    occupied: number;
    available: number;
    total: number;
};

type AdjacentSeatPair = {
    row: number;
    firstSeat: number;
    secondSeat: number;
};

function initializeSeats(rowCount = 8, seatsPerRow = 10): SeatingMatrix {
    if (!Number.isInteger(rowCount) || rowCount <= 0 ||
        !Number.isInteger(seatsPerRow) || seatsPerRow <= 0) {
        throw new RangeError("Row and seat counts must be positive integers.");
    }

    const seats: SeatingMatrix = [];
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        const row: SeatState[] = [];
        for (let seatIndex = 0; seatIndex < seatsPerRow; seatIndex++) {
            row.push(0);
        }
        seats.push(row);
    }

    return seats;
}

function reserveSeat(
    seats: SeatingMatrix,
    rowNumber: number,
    seatNumber: number,
): ReservationResult {
    const rowIndex = rowNumber - 1;
    const seatIndex = seatNumber - 1;

    if (!Number.isInteger(rowNumber) || !Number.isInteger(seatNumber) ||
        rowIndex < 0 || rowIndex >= seats.length) {
        return { success: false, message: "Invalid row or seat number. Please check the seating plan." };
    }

    const selectedRow = seats[rowIndex];
    if (!selectedRow || seatIndex < 0 || seatIndex >= selectedRow.length) {
        return { success: false, message: "Invalid row or seat number. Please check the seating plan." };
    }

    if (selectedRow[seatIndex] === 1) {
        return { success: false, message: `Row ${rowNumber}, seat ${seatNumber} is already reserved.` };
    }

    selectedRow[seatIndex] = 1;
    return { success: true, message: `Reservation confirmed: row ${rowNumber}, seat ${seatNumber}.` };
}

function countSeats(seats: SeatingMatrix): SeatSummary {
    let occupied = 0;
    let available = 0;

    for (let rowIndex = 0; rowIndex < seats.length; rowIndex++) {
        const row = seats[rowIndex];
        for (let seatIndex = 0; seatIndex < row.length; seatIndex++) {
            if (row[seatIndex] === 1) {
                occupied++;
            } else {
                available++;
            }
        }
    }

    return { occupied, available, total: occupied + available };
}

function displaySeats(seats: SeatingMatrix): string {
    let widestRow = 0;
    for (const row of seats) {
        if (row.length > widestRow) {
            widestRow = row.length;
        }
    }

    const rowNumberWidth = String(seats.length).length;
    const seatNumberWidth = Math.max(2, String(widestRow).length);
    const seatHeadings: string[] = [];
    for (let seatIndex = 0; seatIndex < widestRow; seatIndex++) {
        seatHeadings.push(String(seatIndex + 1).padStart(seatNumberWidth, " "));
    }

    const lines = [
        `${" ".repeat(rowNumberWidth)} | ${seatHeadings.join(" ")}`,
    ];

    for (let rowIndex = 0; rowIndex < seats.length; rowIndex++) {
        const row = seats[rowIndex];
        const seatMarkers: string[] = [];
        for (let seatIndex = 0; seatIndex < row.length; seatIndex++) {
            seatMarkers.push(row[seatIndex] === 1 ? "X" : "O");
        }
        lines.push(
            `${String(rowIndex + 1).padStart(rowNumberWidth, " ")} | ${seatMarkers.join("  ")}`,
        );
    }

    return lines.join("\n");
}

function findAdjacentSeats(seats: SeatingMatrix): AdjacentSeatPair | null {
    for (let rowIndex = 0; rowIndex < seats.length; rowIndex++) {
        const row = seats[rowIndex];
        for (let seatIndex = 0; seatIndex < row.length - 1; seatIndex++) {
            if (row[seatIndex] === 0 && row[seatIndex + 1] === 0) {
                return {
                    row: rowIndex + 1,
                    firstSeat: seatIndex + 1,
                    secondSeat: seatIndex + 2,
                };
            }
        }
    }

    return null;
}

function main(): void {
    const cinema = initializeSeats();

    console.log("CINEMA SEATING");
    console.log("Legend: O = available, X = reserved");
    console.log("\nReservations:");
    console.log(`- ${reserveSeat(cinema, 1, 1).message}`);
    console.log(`- ${reserveSeat(cinema, 1, 2).message}`);

    console.log("\nSeating plan:");
    console.log(displaySeats(cinema));

    const summary = countSeats(cinema);
    console.log("\nSeat summary:");
    console.log(`- Reserved: ${summary.occupied}`);
    console.log(`- Available: ${summary.available}`);
    console.log(`- Total: ${summary.total}`);

    const adjacentPair = findAdjacentSeats(cinema);
    if (adjacentPair) {
        console.log(
            `\nAdjacent available seats: row ${adjacentPair.row}, seats ${adjacentPair.firstSeat} and ${adjacentPair.secondSeat}.`,
        );
    } else {
        console.log("\nNo adjacent available seats were found.");
    }
}

main();
