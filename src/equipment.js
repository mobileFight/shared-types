// @flow strict

export const EquipmentsScheme = {
  belt: 0,
  armor: 1,
  bracer: 2,
  footwear: 3,
  quests: 4,
  helmet: 5,
  weapon: 6,
  shield: 7,
  ring: 8,
  suspension: 9,
}

export type EquipmentsType = $Values<typeof EquipmentsScheme>

export const EquipmentStyles = {
  damage: 0,
  armor: 1,
}

export type EquipmentStylesType = $Values<typeof EquipmentStyles>
