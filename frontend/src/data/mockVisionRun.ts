export const mockVisionRun = {
  run_id: 'demo-run-001',
  source: {
    video_name: 'field_pass_north_plot.mp4',
    captured_at: '2026-04-10T09:14:22Z',
    location_hint: 'north plot access lane',
    frame_width: 1280,
    frame_height: 720,
  },
  frames: [
    {
      frame_index: 184,
      timestamp_ms: 6133,
      annotations: [
        {
          id: 'det-184-1',
          label: 'worker',
          text_label: 'Worker on foot',
          certainty: 0.97,
          bbox: {
            x: 842,
            y: 286,
            width: 122,
            height: 284,
          },
          segment_points: [
            { x: 861, y: 293 },
            { x: 934, y: 295 },
            { x: 962, y: 563 },
            { x: 850, y: 567 },
          ],
          reason: 'Human detected inside the projected driving corridor.',
        },
        {
          id: 'det-184-2',
          label: 'rock',
          text_label: 'Large rock',
          certainty: 0.88,
          bbox: {
            x: 612,
            y: 518,
            width: 92,
            height: 64,
          },
          segment_points: [
            { x: 621, y: 529 },
            { x: 689, y: 520 },
            { x: 703, y: 574 },
            { x: 617, y: 582 },
          ],
          reason: 'Rigid obstacle near front-left wheel path.',
        },
      ],
      steering: {
        recommended_action: 'slow_down_and_steer_right',
        steering_angle_deg: 12.5,
        speed_factor: 0.42,
        brake_factor: 0.35,
        vectors: {
          heading_vector: { x: 0.0, y: 1.0 },
          avoidance_vector: { x: 0.38, y: 0.92 },
          safe_corridor_vector: { x: 0.21, y: 0.98 },
        },
        vector_reasoning: [
          'Worker occupies the center-right corridor 6.8 meters ahead.',
          'Obstacle on the left narrows available lane width.',
          'Best safe path is a moderate right correction with reduced speed.',
        ],
      },
      danger_reasoning: {
        level: 'high',
        score: 0.91,
        primary_reason: 'Person detected ahead with overlapping path projection.',
        secondary_reason: 'Rock reduces left-side escape space.',
      },
      uncertainty: {
        overall: 0.12,
        notes: [
          'Bounding box confidence is high for the worker.',
          'Rock contour is partially occluded by dust.',
        ],
      },
      summary: 'High-risk scene. Reduce speed and steer right to maintain clearance from the worker.',
    },
    {
      frame_index: 185,
      timestamp_ms: 6166,
      annotations: [
        {
          id: 'det-185-1',
          label: 'worker',
          text_label: 'Worker on foot',
          certainty: 0.96,
          bbox: {
            x: 856,
            y: 288,
            width: 119,
            height: 281,
          },
          segment_points: [
            { x: 870, y: 296 },
            { x: 943, y: 296 },
            { x: 973, y: 562 },
            { x: 861, y: 568 },
          ],
          reason: 'Human remains inside the near-field danger zone.',
        },
        {
          id: 'det-185-2',
          label: 'crop_row_edge',
          text_label: 'Crop row boundary',
          certainty: 0.83,
          bbox: {
            x: 1007,
            y: 188,
            width: 185,
            height: 422,
          },
          segment_points: [
            { x: 1012, y: 196 },
            { x: 1178, y: 205 },
            { x: 1189, y: 596 },
            { x: 1019, y: 606 },
          ],
          reason: 'Right-side maneuver space is bounded by the crop row edge.',
        },
      ],
      steering: {
        recommended_action: 'brake_and_hold_right_bias',
        steering_angle_deg: 8.0,
        speed_factor: 0.2,
        brake_factor: 0.62,
        vectors: {
          heading_vector: { x: 0.0, y: 1.0 },
          avoidance_vector: { x: 0.24, y: 0.97 },
          safe_corridor_vector: { x: 0.15, y: 0.99 },
        },
        vector_reasoning: [
          'The worker remains the dominant hazard and is moving slightly left.',
          'The system keeps a right bias but reduces steering amplitude to avoid the crop edge.',
          'Braking is prioritized over aggressive turning.',
        ],
      },
      danger_reasoning: {
        level: 'high',
        score: 0.94,
        primary_reason: 'Pedestrian hazard persists with low time-to-clearance.',
        secondary_reason: 'Right boundary limits how far the vehicle can dodge.',
      },
      uncertainty: {
        overall: 0.16,
        notes: [
          'Worker track is stable across consecutive frames.',
          'Right boundary estimate is less certain because of motion blur.',
        ],
      },
      summary: 'Brake strongly and keep a slight right bias while preserving distance from the crop row.',
    },
    {
      frame_index: 186,
      timestamp_ms: 6200,
      annotations: [
        {
          id: 'det-186-1',
          label: 'worker',
          text_label: 'Worker exiting lane',
          certainty: 0.91,
          bbox: {
            x: 905,
            y: 295,
            width: 104,
            height: 267,
          },
          segment_points: [
            { x: 918, y: 302 },
            { x: 987, y: 304 },
            { x: 1008, y: 557 },
            { x: 913, y: 562 },
          ],
          reason: 'Human is still nearby but moving out of the direct path.',
        },
      ],
      steering: {
        recommended_action: 'resume_forward_slow',
        steering_angle_deg: 3.5,
        speed_factor: 0.48,
        brake_factor: 0.14,
        vectors: {
          heading_vector: { x: 0.0, y: 1.0 },
          avoidance_vector: { x: 0.1, y: 1.0 },
          safe_corridor_vector: { x: 0.05, y: 1.0 },
        },
        vector_reasoning: [
          'The worker is clearing the projected path corridor.',
          'Only a small right offset is still required.',
          'Forward motion can resume at a cautious speed.',
        ],
      },
      danger_reasoning: {
        level: 'medium',
        score: 0.53,
        primary_reason: 'Residual pedestrian proximity on the right-hand side.',
        secondary_reason: 'Path corridor is reopening.',
      },
      uncertainty: {
        overall: 0.18,
        notes: [
          'Human motion direction is inferred from a short track window.',
        ],
      },
      summary: 'Risk is dropping. Continue slowly with a slight right offset until the path is fully clear.',
    },
  ],
} as const

export type MockVisionRun = typeof mockVisionRun
