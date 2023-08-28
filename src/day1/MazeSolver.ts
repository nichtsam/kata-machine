const Direction = {
    UP: { x: 0, y: 1 },
    RIGHT: { x: 1, y: 0 },
    DOWN: { x: 0, y: -1 },
    LEFT: { x: -1, y: 0 },
} as const;

const DIRECTIONS = [
    Direction.UP,
    Direction.RIGHT,
    Direction.DOWN,
    Direction.LEFT,
];

function walk(
    maze: string[],
    wall: string,
    goingToWalk: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // Out of map
    if (
        goingToWalk.x < 0 ||
        goingToWalk.x >= maze[0].length ||
        goingToWalk.y < 0 ||
        goingToWalk.y >= maze.length
    ) {
        return false;
    }

    // Seen it
    if (seen[goingToWalk.y][goingToWalk.x]) {
        return false;
    } else {
        // Now Seen it
        seen[goingToWalk.y][goingToWalk.x] = true;
    }

    // Wall
    if (maze[goingToWalk.y][goingToWalk.x] === wall) {
        return false;
    }

    // Ok gonna walk here.
    path.push(goingToWalk);
    const current = goingToWalk;

    // End
    if (current.x === end.x && current.y === end.y) {
        return true;
    }

    for (let i = 0; i < DIRECTIONS.length; i++) {
        const { x, y } = DIRECTIONS[i];
        if (
            walk(
                maze,
                wall,
                {
                    x: current.x + x,
                    y: current.y + y,
                },
                end,
                seen,
                path,
            )
        ) {
            return true;
        }
    }

    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = new Array(maze.length)
        .fill(undefined)
        .map(() => new Array(maze[0].length).fill(false));
    const path: Point[] = [];

    walk(maze, wall, start, end, seen, path);

    return path;
}
