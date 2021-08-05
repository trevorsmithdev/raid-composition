// const classes = {
//   rogue: {
//     specs: {
//       assassination: {
//         displayName: 'Assassination',
//         buffs: []
//       },
//       combat: {
//         displayName: 'Combat',
//         buffs: []
//       },
//       subtlety: {
//         displayName: 'Subtlety',
//         buffs: []
//       }
//     }
//   }
// }

const classes = [
  {
    displayName: 'Rogue',
    slug: 'rogue',
    specs: [
      {
        slug: 'assassination',
        displayName: 'Assassination'
      },
      {
        slug: 'combat',
        displayName: 'Combat'
      },
      {
        slug: 'subtlety',
        displayName: 'Subtlety'
      }
    ]
  }
]



export { classes }