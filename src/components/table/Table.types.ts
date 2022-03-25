import React from 'react'

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  className?: string
  /** The minimum width that table should measure */
  minWidth?: number
  /** Children elements */
  children: React.ReactNode
}

export interface TableHeadProps {
  className?: string
  /** Children elements */
  children: React.ReactElement | React.ReactElement[]
}

export interface TableRowProps {
  className?: string
  /** Children elements */
  children: React.ReactElement | React.ReactElement[]
  /** Is its parent a TableHead Component? */
  isTableHead: boolean
}

export interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  className?: string
  /** Children elements */
  children: React.ReactNode
  /** Is its parent a TableHead Component? */
  isTableHead: boolean
  /** Cell align */
  align: 'left' | 'center' | 'right'
}

export interface TableBodyProps {
  className?: string
  /** Children elements */
  children: React.ReactNode
}

export interface TablePaginationProps {
  className?: string
  /** Number of available rows */
  count: number
  /** Number of visible rows per page */
  rowsPerPage: number
  /** Current page */
  page: number
  /** Handle page change */
  onPageChange: (page: number) => void
}

export interface TableSortLabelProps {
  className?: string
  /** Is the sort column active */
  isActive: boolean
  /** Content alignment used to place the sort icon */
  align: 'left' | 'right'
  /** What is the sort direction (asc or desc) */
  direction: 'asc' | 'desc'
  /** Handle label click */
  onClick?: (newDirection: 'asc' | 'desc') => void
  /** Children elements */
  children: React.ReactNode
}
