export type IMDColor =
  | "primary"
  | "primary_container"
  | "secondary"
  | "secondary_container"
  | "tertiary"
  | "tertiary_container"
  | "error"
  | "error_container"
  | "surface"
  | "surface_container"
  | "surface_container_high"
  | "surface_variant";

export type IMDSize = "large" | "medium" | "small";
export type IMDFontVariant =
  | "display"
  | "headline"
  | "title"
  | "body"
  | "label";

export interface MaterialScheme {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  primaryFixed: string;
  primaryFixedDim: string;
  onPrimaryFixed: string;
  onPrimaryFixedVariant: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  secondaryFixed: string;
  secondaryFixedDim: string;
  onSecondaryFixed: string;
  onSecondaryFixedVariant: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  tertiaryFixed: string;
  tertiaryFixedDim: string;
  onTertiaryFixed: string;
  onTertiaryFixedVariant: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  outline: string;
  outlineVariant: string;
  shadow: string;
  scrim: string;
  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
  surfaceTint: string;
}
