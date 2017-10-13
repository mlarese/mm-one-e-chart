import _filter from 'lodash/filter'
export const products = [
  {
    'productType': 'd',
    'groupId': 1,
    'inventory': 22,
    'productPrice': 547,
    'productName': 'Lorem aliqua adipisicing',
    'productId': 1
  },
  {
    'productType': 'b',
    'groupId': 1,
    'inventory': 100,
    'productPrice': 132,
    'productName': 'sunt do pariatur',
    'productId': 2
  },
  {
    'productType': 'a',
    'groupId': 2,
    'inventory': 53,
    'productPrice': 91,
    'productName': 'cillum eu anim',
    'productId': 3
  },
  {
    'productType': 'b',
    'groupId': 4,
    'inventory': 58,
    'productPrice': 293,
    'productName': 'veniam irure adipisicing',
    'productId': 4
  },
  {
    'productType': 'a',
    'groupId': 2,
    'inventory': 78,
    'productPrice': 211,
    'productName': 'elit ipsum eu',
    'productId': 5
  },
  {
    'productType': 'a',
    'groupId': 1,
    'inventory': 30,
    'productPrice': 545,
    'productName': 'excepteur laborum cupidatat',
    'productId': 6
  },
  {
    'productType': 'd',
    'groupId': 2,
    'inventory': 81,
    'productPrice': 717,
    'productName': 'dolor qui dolore',
    'productId': 7
  },
  {
    'productType': 'a',
    'groupId': 2,
    'inventory': 23,
    'productPrice': 535,
    'productName': 'tempor ex duis',
    'productId': 8
  },
  {
    'productType': 'a',
    'groupId': 2,
    'inventory': 100,
    'productPrice': 824,
    'productName': 'enim magna ea',
    'productId': 9
  },
  {
    'productType': 'd',
    'groupId': 4,
    'inventory': 45,
    'productPrice': 536,
    'productName': 'qui adipisicing amet',
    'productId': 10
  },
  {
    'productType': 'a',
    'groupId': 1,
    'inventory': 72,
    'productPrice': 901,
    'productName': 'amet do sit',
    'productId': 11
  },
  {
    'productType': 'b',
    'groupId': 1,
    'inventory': 14,
    'productPrice': 201,
    'productName': 'labore sint incididunt',
    'productId': 12
  },
  {
    'productType': 'b',
    'groupId': 3,
    'inventory': 44,
    'productPrice': 713,
    'productName': 'sunt aliqua voluptate',
    'productId': 13
  },
  {
    'productType': 'a',
    'groupId': 3,
    'inventory': 58,
    'productPrice': 922,
    'productName': 'do nisi anim',
    'productId': 14
  },
  {
    'productType': 'a',
    'groupId': 3,
    'inventory': 35,
    'productPrice': 691,
    'productName': 'cillum tempor commodo',
    'productId': 15
  },
  {
    'productType': 'b',
    'groupId': 2,
    'inventory': 63,
    'productPrice': 243,
    'productName': 'consequat culpa Lorem',
    'productId': 16
  },
  {
    'productType': 'a',
    'groupId': 1,
    'inventory': 8,
    'productPrice': 402,
    'productName': 'culpa do adipisicing',
    'productId': 17
  },
  {
    'productType': 'd',
    'groupId': 1,
    'inventory': 35,
    'productPrice': 189,
    'productName': 'laboris ut minim',
    'productId': 18
  },
  {
    'productType': 'b',
    'groupId': 2,
    'inventory': 76,
    'productPrice': 34,
    'productName': 'mollit incididunt sunt',
    'productId': 19
  },
  {
    'productType': 'a',
    'groupId': 2,
    'inventory': 26,
    'productPrice': 540,
    'productName': 'amet enim tempor',
    'productId': 20
  },
  {
    'productType': 'a',
    'groupId': 1,
    'inventory': 12,
    'productPrice': 151,
    'productName': 'occaecat enim ad',
    'productId': 21
  },
  {
    'productType': 'a',
    'groupId': 1,
    'inventory': 80,
    'productPrice': 956,
    'productName': 'velit exercitation enim',
    'productId': 22
  },
  {
    'productType': 'd',
    'groupId': 4,
    'inventory': 2,
    'productPrice': 64,
    'productName': 'in ullamco pariatur',
    'productId': 23
  },
  {
    'productType': 'b',
    'groupId': 3,
    'inventory': 4,
    'productPrice': 771,
    'productName': 'aute sint irure',
    'productId': 24
  },
  {
    'productType': 'd',
    'groupId': 3,
    'inventory': 77,
    'productPrice': 155,
    'productName': 'dolore aliqua elit',
    'productId': 25
  },
  {
    'productType': 'd',
    'groupId': 4,
    'inventory': 48,
    'productPrice': 289,
    'productName': 'ullamco ea veniam',
    'productId': 26
  },
  {
    'productType': 'b',
    'groupId': 1,
    'inventory': 11,
    'productPrice': 365,
    'productName': 'tempor velit nostrud',
    'productId': 27
  },
  {
    'productType': 'a',
    'groupId': 3,
    'inventory': 86,
    'productPrice': 433,
    'productName': 'id voluptate labore',
    'productId': 28
  },
  {
    'productType': 'd',
    'groupId': 3,
    'inventory': 58,
    'productPrice': 235,
    'productName': 'laborum sunt magna',
    'productId': 29
  },
  {
    'productType': 'd',
    'groupId': 4,
    'inventory': 90,
    'productPrice': 252,
    'productName': 'cillum incididunt ex',
    'productId': 30
  },
  {
    'productType': 'b',
    'groupId': 2,
    'inventory': 53,
    'productPrice': 70,
    'productName': 'adipisicing non exercitation',
    'productId': 31
  },
  {
    'productType': 'a',
    'groupId': 4,
    'inventory': 53,
    'productPrice': 448,
    'productName': 'laborum nulla labore',
    'productId': 32
  },
  {
    'productType': 'd',
    'groupId': 1,
    'inventory': 2,
    'productPrice': 716,
    'productName': 'ipsum reprehenderit eiusmod',
    'productId': 33
  },
  {
    'productType': 'b',
    'groupId': 4,
    'inventory': 24,
    'productPrice': 272,
    'productName': 'magna id dolore',
    'productId': 34
  },
  {
    'productType': 'a',
    'groupId': 3,
    'inventory': 36,
    'productPrice': 515,
    'productName': 'mollit ullamco pariatur',
    'productId': 35
  },
  {
    'productType': 'b',
    'groupId': 2,
    'inventory': 70,
    'productPrice': 908,
    'productName': 'sit nulla anim',
    'productId': 36
  },
  {
    'productType': 'd',
    'groupId': 4,
    'inventory': 21,
    'productPrice': 883,
    'productName': 'sint culpa reprehenderit',
    'productId': 37
  },
  {
    'productType': 'b',
    'groupId': 1,
    'inventory': 17,
    'productPrice': 538,
    'productName': 'incididunt duis ut',
    'productId': 38
  },
  {
    'productType': 'd',
    'groupId': 2,
    'inventory': 41,
    'productPrice': 912,
    'productName': 'eu cupidatat deserunt',
    'productId': 39
  },
  {
    'productType': 'a',
    'groupId': 1,
    'inventory': 30,
    'productPrice': 442,
    'productName': 'exercitation et proident',
    'productId': 40
  },
  {
    'productType': 'b',
    'groupId': 4,
    'inventory': 73,
    'productPrice': 592,
    'productName': 'ullamco sunt enim',
    'productId': 41
  },
  {
    'productType': 'a',
    'groupId': 2,
    'inventory': 85,
    'productPrice': 271,
    'productName': 'quis quis deserunt',
    'productId': 42
  },
  {
    'productType': 'd',
    'groupId': 3,
    'inventory': 63,
    'productPrice': 928,
    'productName': 'quis qui occaecat',
    'productId': 43
  },
  {
    'productType': 'b',
    'groupId': 4,
    'inventory': 40,
    'productPrice': 247,
    'productName': 'magna cillum pariatur',
    'productId': 44
  },
  {
    'productType': 'a',
    'groupId': 4,
    'inventory': 56,
    'productPrice': 384,
    'productName': 'qui ex laboris',
    'productId': 45
  },
  {
    'productType': 'a',
    'groupId': 1,
    'inventory': 44,
    'productPrice': 369,
    'productName': 'enim proident anim',
    'productId': 46
  },
  {
    'productType': 'a',
    'groupId': 4,
    'inventory': 38,
    'productPrice': 522,
    'productName': 'ipsum deserunt minim',
    'productId': 47
  },
  {
    'productType': 'a',
    'groupId': 3,
    'inventory': 45,
    'productPrice': 966,
    'productName': 'laboris in voluptate',
    'productId': 48
  },
  {
    'productType': 'd',
    'groupId': 3,
    'inventory': 68,
    'productPrice': 774,
    'productName': 'officia in exercitation',
    'productId': 49
  },
  {
    'productType': 'a',
    'groupId': 1,
    'inventory': 66,
    'productPrice': 283,
    'productName': 'qui tempor esse',
    'productId': 50
  },
  {
    'productType': 'd',
    'groupId': 4,
    'inventory': 20,
    'productPrice': 685,
    'productName': 'ipsum id dolor',
    'productId': 51
  },
  {
    'productType': 'd',
    'groupId': 3,
    'inventory': 98,
    'productPrice': 361,
    'productName': 'nisi mollit aliqua',
    'productId': 52
  },
  {
    'productType': 'a',
    'groupId': 1,
    'inventory': 59,
    'productPrice': 106,
    'productName': 'veniam irure cillum',
    'productId': 53
  },
  {
    'productType': 'd',
    'groupId': 4,
    'inventory': 49,
    'productPrice': 956,
    'productName': 'excepteur officia commodo',
    'productId': 54
  },
  {
    'productType': 'd',
    'groupId': 1,
    'inventory': 35,
    'productPrice': 916,
    'productName': 'dolor proident Lorem',
    'productId': 55
  },
  {
    'productType': 'b',
    'groupId': 2,
    'inventory': 58,
    'productPrice': 100,
    'productName': 'deserunt deserunt aliquip',
    'productId': 56
  },
  {
    'productType': 'd',
    'groupId': 4,
    'inventory': 10,
    'productPrice': 530,
    'productName': 'sunt ut labore',
    'productId': 57
  },
  {
    'productType': 'd',
    'groupId': 1,
    'inventory': 20,
    'productPrice': 485,
    'productName': 'qui aute occaecat',
    'productId': 58
  },
  {
    'productType': 'a',
    'groupId': 2,
    'inventory': 52,
    'productPrice': 732,
    'productName': 'nisi quis laborum',
    'productId': 59
  },
  {
    'productType': 'd',
    'groupId': 2,
    'inventory': 19,
    'productPrice': 992,
    'productName': 'nulla aliqua nisi',
    'productId': 60
  },
  {
    'productType': 'a',
    'groupId': 1,
    'inventory': 76,
    'productPrice': 756,
    'productName': 'laborum qui ullamco',
    'productId': 61
  },
  {
    'productType': 'b',
    'groupId': 3,
    'inventory': 97,
    'productPrice': 912,
    'productName': 'consequat dolor voluptate',
    'productId': 62
  },
  {
    'productType': 'b',
    'groupId': 2,
    'inventory': 100,
    'productPrice': 531,
    'productName': 'sunt sunt esse',
    'productId': 63
  },
  {
    'productType': 'b',
    'groupId': 3,
    'inventory': 14,
    'productPrice': 612,
    'productName': 'ad id officia',
    'productId': 64
  },
  {
    'productType': 'd',
    'groupId': 4,
    'inventory': 36,
    'productPrice': 339,
    'productName': 'do anim quis',
    'productId': 65
  },
  {
    'productType': 'd',
    'groupId': 1,
    'inventory': 32,
    'productPrice': 516,
    'productName': 'do velit esse',
    'productId': 66
  },
  {
    'productType': 'b',
    'groupId': 4,
    'inventory': 2,
    'productPrice': 145,
    'productName': 'velit fugiat velit',
    'productId': 67
  },
  {
    'productType': 'b',
    'groupId': 3,
    'inventory': 92,
    'productPrice': 879,
    'productName': 'in Lorem labore',
    'productId': 68
  },
  {
    'productType': 'b',
    'groupId': 2,
    'inventory': 57,
    'productPrice': 111,
    'productName': 'mollit et ut',
    'productId': 69
  },
  {
    'productType': 'd',
    'groupId': 3,
    'inventory': 92,
    'productPrice': 240,
    'productName': 'nostrud cupidatat excepteur',
    'productId': 70
  },
  {
    'productType': 'a',
    'groupId': 2,
    'inventory': 12,
    'productPrice': 566,
    'productName': 'duis fugiat laboris',
    'productId': 71
  },
  {
    'productType': 'a',
    'groupId': 3,
    'inventory': 3,
    'productPrice': 88,
    'productName': 'duis qui voluptate',
    'productId': 72
  },
  {
    'productType': 'd',
    'groupId': 4,
    'inventory': 78,
    'productPrice': 372,
    'productName': 'proident est id',
    'productId': 73
  },
  {
    'productType': 'd',
    'groupId': 2,
    'inventory': 20,
    'productPrice': 407,
    'productName': 'cupidatat esse commodo',
    'productId': 74
  },
  {
    'productType': 'a',
    'groupId': 1,
    'inventory': 96,
    'productPrice': 904,
    'productName': 'est sit irure',
    'productId': 75
  },
  {
    'productType': 'a',
    'groupId': 3,
    'inventory': 34,
    'productPrice': 455,
    'productName': 'deserunt tempor aliquip',
    'productId': 76
  },
  {
    'productType': 'a',
    'groupId': 3,
    'inventory': 64,
    'productPrice': 926,
    'productName': 'adipisicing nulla consectetur',
    'productId': 77
  },
  {
    'productType': 'd',
    'groupId': 4,
    'inventory': 93,
    'productPrice': 162,
    'productName': 'fugiat ullamco consectetur',
    'productId': 78
  },
  {
    'productType': 'a',
    'groupId': 3,
    'inventory': 20,
    'productPrice': 341,
    'productName': 'nostrud dolore cupidatat',
    'productId': 79
  },
  {
    'productType': 'b',
    'groupId': 4,
    'inventory': 48,
    'productPrice': 545,
    'productName': 'aliquip sunt labore',
    'productId': 80
  },
  {
    'productType': 'a',
    'groupId': 4,
    'inventory': 91,
    'productPrice': 580,
    'productName': 'veniam voluptate sunt',
    'productId': 81
  },
  {
    'productType': 'a',
    'groupId': 1,
    'inventory': 46,
    'productPrice': 857,
    'productName': 'dolore duis et',
    'productId': 82
  },
  {
    'productType': 'd',
    'groupId': 4,
    'inventory': 91,
    'productPrice': 764,
    'productName': 'tempor dolore dolore',
    'productId': 83
  },
  {
    'productType': 'a',
    'groupId': 1,
    'inventory': 17,
    'productPrice': 331,
    'productName': 'incididunt ex cillum',
    'productId': 84
  },
  {
    'productType': 'b',
    'groupId': 2,
    'inventory': 40,
    'productPrice': 361,
    'productName': 'do laboris voluptate',
    'productId': 85
  },
  {
    'productType': 'd',
    'groupId': 4,
    'inventory': 4,
    'productPrice': 768,
    'productName': 'esse ipsum adipisicing',
    'productId': 86
  },
  {
    'productType': 'b',
    'groupId': 1,
    'inventory': 53,
    'productPrice': 448,
    'productName': 'id cupidatat commodo',
    'productId': 87
  },
  {
    'productType': 'd',
    'groupId': 3,
    'inventory': 67,
    'productPrice': 290,
    'productName': 'magna culpa commodo',
    'productId': 88
  },
  {
    'productType': 'b',
    'groupId': 1,
    'inventory': 52,
    'productPrice': 43,
    'productName': 'proident dolor veniam',
    'productId': 89
  },
  {
    'productType': 'd',
    'groupId': 3,
    'inventory': 26,
    'productPrice': 263,
    'productName': 'enim cillum laborum',
    'productId': 90
  },
  {
    'productType': 'b',
    'groupId': 1,
    'inventory': 48,
    'productPrice': 835,
    'productName': 'velit sit fugiat',
    'productId': 91
  },
  {
    'productType': 'a',
    'groupId': 4,
    'inventory': 87,
    'productPrice': 820,
    'productName': 'culpa nisi quis',
    'productId': 92
  },
  {
    'productType': 'd',
    'groupId': 2,
    'inventory': 49,
    'productPrice': 133,
    'productName': 'duis pariatur veniam',
    'productId': 93
  },
  {
    'productType': 'b',
    'groupId': 3,
    'inventory': 15,
    'productPrice': 689,
    'productName': 'ea ut adipisicing',
    'productId': 94
  },
  {
    'productType': 'a',
    'groupId': 3,
    'inventory': 19,
    'productPrice': 617,
    'productName': 'nisi consectetur ea',
    'productId': 95
  },
  {
    'productType': 'b',
    'groupId': 1,
    'inventory': 8,
    'productPrice': 618,
    'productName': 'et aliqua Lorem',
    'productId': 96
  },
  {
    'productType': 'd',
    'groupId': 1,
    'inventory': 52,
    'productPrice': 825,
    'productName': 'et cupidatat sit',
    'productId': 97
  },
  {
    'productType': 'b',
    'groupId': 1,
    'inventory': 64,
    'productPrice': 265,
    'productName': 'esse veniam duis',
    'productId': 98
  },
  {
    'productType': 'b',
    'groupId': 4,
    'inventory': 61,
    'productPrice': 429,
    'productName': 'et ea ipsum',
    'productId': 99
  }
]

export const productsFn = config => {
  const {page, perPage, category} = config.params
  const offset = (page - 1) * perPage

  let selectedProducts = _filter(products.slice(offset, offset + perPage), p => p.groupId === category)
  return [200, selectedProducts]
}
