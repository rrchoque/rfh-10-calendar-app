
export const events = [
    {
        id: '1',
        start: new Date('2023-11-05 13:00:00'),
        end: new Date('2023-11-05 15:00:00'),
        title: 'Cumpleaños de Reynaldo',
        notes: 'Alguna nota'
    },
    {
        id: '2',
        start: new Date('2022-11-09 13:00:00'),
        end: new Date('2022-11-09 15:00:00'),
        title: 'Cumpleaños de Melissa',
        notes: 'Alguna nota de Melissa'
    },
];

export const initialState = {
    isLoadingEvents: true,
    events: [],
    activeEvent: null
}

export const calendarWithEventsState = {
    isLoadingEvents: false,
    events: [ ...events ],
    activeEvent: null
}

export const calendarWithActiveEventState = {
    isLoadingEvents: false,
    events: [ ...events ],
    activeEvent: { ...events[0] }
}






