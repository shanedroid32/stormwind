import { addListener } from '@finsweet/ts-utils';
import { addDays, format } from 'date-fns';
import { calculatePricing } from './util/calculatePricing';
import {
  BAYS_TEXT,
  DATE_INPUT,
  DAYS_TEXT,
  FORM,
  HOURS_INPUT,
  HOURS_TEXT,
  NUMBER_OF_BAYS_INPUT,
  NUMBER_OF_PLAYERS_INPUT,
  TIME_INPUT,
  TIME_TEXT,
} from './util/elements';
import { playersHelper } from './util/playersHelper';

window.Webflow ||= [];
window.Webflow.push(() => {
  let registrantFirstName: string;
  let registrantLastName: string;
  let registrantEmailAddress: string;
  let registrantPhoneNumber: string;

  let numberOfPlayers: number;
  let numberOfBays: number;
  let numberOfHours: number;

  let reservationDate: Date;
  let reservationTime: number;

  const init = () => {
    DATE_INPUT.setAttribute('min', format(addDays(new Date(), 7).toDateString(), 'YYYY-MM-dd'));
    DATE_INPUT.value = addDays(new Date(), 7).toDateString();
    reservationDate = DATE_INPUT.valueAsDate;
  };

  document.addEventListener('DOMContentLoaded', e => {
    init();
  });

  // Listeners
  const PLAYERS_LISTENER = addListener(NUMBER_OF_PLAYERS_INPUT, 'change', () => {
    numberOfPlayers = NUMBER_OF_PLAYERS_INPUT.valueAsNumber;
    playersHelper(numberOfPlayers, DATE_INPUT, NUMBER_OF_BAYS_INPUT, BAYS_TEXT);
  });

  const DATE_LISTENER = addListener(DATE_INPUT, 'change', () => {
    const timeOffset = new Date().getTimezoneOffset() * 60 * 1000;
    const milliseconds = DATE_INPUT.valueAsNumber + timeOffset;
    reservationDate = new Date(milliseconds);
  });

  const TIME_LISTENER = addListener(TIME_INPUT, 'change', () => {
    reservationTime = TIME_INPUT.valueAsNumber;
    TIME_TEXT.innerHTML = reservationTime.toString();
  });

  const HOURS_LISTENER = addListener(HOURS_INPUT, 'change', () => {
    numberOfHours = HOURS_INPUT.valueAsNumber;
    HOURS_TEXT.innerHTML = numberOfHours.toString();
    DAYS_TEXT.innerHTML = format(reservationDate, 'EEEE');
    calculatePricing(reservationDate, numberOfBays, numberOfHours, reservationTime);
  });

  const FORM_LISTENER = addListener(FORM, 'submit', e => {
    e.preventDefault();

    // TODO: Need to add the rest of the fields from the form...
    const formData = {
      numberOfPlayers: numberOfPlayers,
      numberOfBays: numberOfBays,
      numberOfHours: numberOfHours,
      reservationDate: reservationDate,
      reservationTime: reservationTime,
    };

    console.log(formData);
  });
});
