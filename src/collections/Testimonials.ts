import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'clientName',
    defaultColumns: ['clientName', 'vehicle', 'rating', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'clientName',
      type: 'text',
      required: true,
      label: 'Nom du client',
    },
    {
      name: 'clientInitials',
      type: 'text',
      label: 'Initiales (ex: M.D.)',
    },
    {
      name: 'vehicle',
      type: 'text',
      required: true,
      label: 'Véhicule acheté',
    },
    {
      name: 'rating',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
      label: 'Note (1-5 étoiles)',
    },
    {
      name: 'testimonial',
      type: 'textarea',
      required: true,
      label: 'Témoignage',
    },
    {
      name: 'service',
      type: 'select',
      options: [
        { label: 'Basic', value: 'basic' },
        { label: 'Premium', value: 'premium' },
        { label: 'VIP', value: 'vip' },
      ],
      label: 'Forfait utilisé',
    },
    {
      name: 'location',
      type: 'text',
      label: 'Ville du client',
    },
    {
      name: 'purchaseDate',
      type: 'date',
      label: "Date d'achat",
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Publié', value: 'published' },
        { label: 'En attente', value: 'pending' },
        { label: 'Refusé', value: 'rejected' },
      ],
      defaultValue: 'pending',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Témoignage mis en avant',
      defaultValue: false,
    },
    {
      name: 'clientPhoto',
      type: 'upload',
      relationTo: 'media',
      label: 'Photo du client (optionnel)',
    },
    {
      name: 'vehiclePhoto',
      type: 'upload',
      relationTo: 'media',
      label: 'Photo du véhicule',
    },
  ],
}
