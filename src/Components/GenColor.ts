

export function genColor(num: number): any {
    let arr = ['red', 'blue', 'green', 'orange', 'brown', 'black', 'purple', 'white', 'grey',
        { 'fall': 'orange', 'winter': '#61b8e0', 'summer': 'red', 'spring': 'green' }
    ];

    return arr[num];
}

export function genClr(): any[] {
    let arr = ['red', 'blue', 'green', 'orange', 'brown', 'black', 'purple', 'white', 'grey',
        {
            'fall': 'orange', 'winter': 'frosty', 'summer': 'red', 'spring': 'green',
            'days': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'suday']
        }
    ];
    return arr;
}