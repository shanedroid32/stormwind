import { addDays, format } from 'date-fns';

/**
 * Set a hidden field (holding the number of bays) and the text display.
 * @param numberOfPlayers The number of players that has been input.
 * @param dateInput The date that was selected.
 * @param baysInput The hidden field containing the number of bays.
 * @param baysText The text element that displays the number of bays to the user.
 */
export const playersHelper = (
  numberOfPlayers: number,
  dateInput: HTMLInputElement,
  baysInput: HTMLInputElement,
  baysText: HTMLElement
) => {
  let numberOfBays = 2;

  const setSevenDays = () => {
    dateInput.setAttribute('min', format(addDays(new Date(), 7).toDateString(), 'YYYY-MM-dd'));
    dateInput.valueAsDate = addDays(new Date(), 7);
  };

  const setFourteenDays = () => {
    dateInput.setAttribute('min', format(addDays(new Date(), 14).toDateString(), 'YYYY-MM-dd'));
    dateInput.valueAsDate = addDays(new Date(), 14);
  };

  if (numberOfPlayers <= 16) {
    numberOfBays = 2;
    setSevenDays();
  } else if (numberOfPlayers > 16 && numberOfPlayers <= 24) {
    numberOfBays = 3;
    setSevenDays();
  } else if (numberOfPlayers > 24 && numberOfPlayers <= 32) {
    numberOfBays = 4;
    setSevenDays();
  } else if (numberOfPlayers > 32 && numberOfPlayers <= 40) {
    numberOfBays = 5;
    setSevenDays();
  } else if (numberOfPlayers > 40 && numberOfPlayers <= 48) {
    numberOfBays = 6;
    setFourteenDays();
  } else if (numberOfPlayers > 48 && numberOfPlayers <= 56) {
    numberOfBays = 7;
    setFourteenDays();
  } else if (numberOfPlayers > 56 && numberOfPlayers <= 64) {
    numberOfBays = 8;
    setFourteenDays();
  } else if (numberOfPlayers > 64 && numberOfPlayers <= 72) {
    numberOfBays = 9;
    setFourteenDays();
  } else if (numberOfPlayers > 72 && numberOfPlayers <= 80) {
    numberOfBays = 10;
    setFourteenDays();
  } else if (numberOfPlayers > 80 && numberOfPlayers <= 88) {
    numberOfBays = 11;
    setFourteenDays();
  } else if (numberOfPlayers > 88 && numberOfPlayers <= 96) {
    numberOfBays = 12;
    setFourteenDays();
  } else if (numberOfPlayers > 96 && numberOfPlayers <= 104) {
    numberOfBays = 13;
    setFourteenDays();
  } else if (numberOfPlayers > 104 && numberOfPlayers <= 112) {
    numberOfBays = 14;
    setFourteenDays();
  } else if (numberOfPlayers > 112 && numberOfPlayers <= 120) {
    numberOfBays = 15;
    setFourteenDays();
  } else if (numberOfPlayers > 120 && numberOfPlayers <= 128) {
    numberOfBays = 16;
    setFourteenDays();
  } else if (numberOfPlayers > 128 && numberOfPlayers <= 136) {
    numberOfBays = 17;
    setFourteenDays();
  } else if (numberOfPlayers > 136 && numberOfPlayers <= 144) {
    numberOfBays = 18;
    setFourteenDays();
  } else if (numberOfPlayers > 144 && numberOfPlayers <= 152) {
    numberOfBays = 19;
    setFourteenDays();
  }

  baysInput.value = numberOfBays.toString();
  baysText.innerHTML = numberOfBays.toString();
};
