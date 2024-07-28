/**
 * calculatePricing takes in an event date, a number of bays, a number of hours, and the time of day and then returns the cost of the reservation.
 * @param eventDate The day of the week being reserved.
 * @param numberOfBays The number of bays being reserved.
 * @param numberOfHours The number of hours those bays are being reserved for.
 * @param timeOfDay The time of day they want to reserve (hours in military time)
 * @returns The final calculated price of the reservation.
 */
export const calculatePricing = (
  eventDate: Date,
  numberOfBays: number,
  numberOfHours: number,
  timeOfDay: number
) => {
  /** Get the day of the week. */
  const dayOfTheWeek = eventDate.getDay();

  /** The final cost that is returned by this method. */
  let finalCost = 0;

  /** If there are only 2 bays being reserved, check the day of the week.
   * If it is Sunday-Thursday, and is before 5:00 PM the cost is $30 per bay per hour. If it is after 5:00 PM, the cost is $40 per bay per hour.
   * If it is Friday or Saturday, before 5PM is $40 per bay per hour and after 5PM is $50 per bay per hour.
   */
  if (numberOfBays <= 2) {
    if (
      dayOfTheWeek === 0 ||
      dayOfTheWeek === 1 ||
      dayOfTheWeek === 2 ||
      dayOfTheWeek === 3 ||
      dayOfTheWeek === 4
    ) {
      // If it is Sunday - Thursday...
      if (timeOfDay >= 11 && timeOfDay < 17) {
        // If it is before 5PM, $30 per bay per hour
        finalCost = numberOfHours * numberOfBays * 30;
      } else {
        // If it is after 5PM, $40 per bay per hour
        finalCost = numberOfHours * numberOfBays * 40;
      }
    } else if (dayOfTheWeek === 5 || dayOfTheWeek === 6) {
      // If it is Friday or Saturday...
      if (timeOfDay >= 11 && timeOfDay < 17) {
        // If it is before 5PM, $40 per bay per hour
        finalCost = numberOfHours * numberOfBays * 40;
      } else {
        // If it is after 5PM, $50 per bay per hour
        finalCost = numberOfHours * numberOfBays * 50;
      }
    }
  } else {
    // If they are reserving more than 2 bays...
    if (dayOfTheWeek === 1) {
      // If it is Monday, 20% of the total price of $80 per bay per hour
      const basePrice: number = numberOfHours * numberOfBays * 80;
      const percentageOff: number = basePrice * 0.2;
      finalCost = basePrice - percentageOff;
    } else {
      // If it is any other day, $80 per bay per hour
      finalCost = numberOfHours * numberOfBays * 80;
    }
  }

  // Return the final cost calculation
  return finalCost;
};
