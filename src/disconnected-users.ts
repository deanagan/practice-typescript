
export interface LookUp<V> {
    [key: string]: V;
}

export interface Pair<T1, T2> {
    first: T1;
    second: T2;
}

class Node {
    private _connections: Node[] = new Array();

    constructor(
    private _name: string,
    private _count: number
    ){}

    addConnections(node: Node) : void {
        this._connections.push(node);
    }

    get connections() {
        return this._connections;
    }

    get count() {
        return this._count;
    }

    get name() {
        return this._name;
    }
}

class UsersLookUp<V> implements LookUp<V> {
    [key: string]: V;
}

type Edge = Pair<string, string>;

export function disconnected_users(net: Pair<string, string>[], users: LookUp<number>, source: string, crushes: string[]) {
    // Create a node lookup
    let nodeLookup : LookUp<Node> = new UsersLookUp<Node>();

    for(const key in users) {
        nodeLookup[key] = new Node(key, users[key]);
    }

    // if source is in the crushes array, then return sum of all nodes
    if (crushes.indexOf(source) !== -1) {
        let total: number = 0;
        for(const key in nodeLookup) {
            total += nodeLookup[key].count;
        }

        return total;
    }

    // Add child to each node
    net.forEach((value: Edge) => {
        nodeLookup[value.first].addConnections(nodeLookup[value.second]);
    });

    let connected: Node[] = new Array();
    let visited: string[] = new Array();

    connected.push(nodeLookup[source]);

    while (connected.length > 0) {
        let node = connected.pop();
        if (node) {
            visited.push(node.name);

            if (node.connections) {
                for(let child of node.connections) {
                    if (crushes.indexOf(child?.name) === -1) {
                        connected.push(child);
                    }
                }
            }
        }
    }

    let result: number = 0;
    for(const key in nodeLookup) {
        if (visited.indexOf(nodeLookup[key].name) === -1) {
            result += nodeLookup[key].count;
        }
    }

    return result;
}
