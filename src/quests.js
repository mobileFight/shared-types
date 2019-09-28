//  @flow strict

export const QuestStates = {
  active: 1,
  available: 2,
  completed: 3,
  notAvailable: 4,
}

export type QuestStatesType = $Values<typeof QuestStates>
